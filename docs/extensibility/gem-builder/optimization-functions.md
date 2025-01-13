---
title: Optimization functions
id: optimization-functions
description: Optimization functions
tags:
  - gem builder
---

Custom Gems create code by defining functionality in their `def apply()` method.
By default Prophecy will apply optimizations to this generated code to assist the Spark
Catalyst optimization engine when it creates the Spark Plan. The optimizations make replacements
using functionally equivalent code, but in some corner cases this may cause unwanted side effects.

In certain corner cases you may want disable some or all optimizations.

:::note

These functions are Python specific.

:::

## Turn off loop unrolling

By default Prophecy will unroll small static loops.

You can turn off loop unrolling by adding `# skipLoopUnRolling` as a comment on the same line as the for loop.

![Turn off loop unrolling example](img/turn-off-loop-unrolling.png)

## Replace variables and optimize objects

You can use two functions to disable substitution of variables during the optimization step.

- `SubstituteDisabled` - Disables the substitution of this variable with the value in all places it's used.

- `PostSubstituteDisabled` - Only performs optimization substitution if all instances of the variable can be replaced.

Example:

```py
def testLoopUnRoll():
    myCols: SubstituteDisabled = ['a']
    cond = None
    for scdCol in myCols:
        if cond is None:
            cond = (existingDF[scdCol] != updatesDF[scdCol])
        else:
            cond = (cond | (existingDF[scdCol] != updatesDF[scdCol]))
    stagedUpdatesDF = updatesDF.where((existingDF["current"] == lit("true")) & (cond))

    cols: PostSubstituteDisabled = ['a']
    updateCond = None
    for scdCol1 in cols:
        if updateCond is None:
            updateCond = (existingDF[scdCol1] != updatesDF[scdCol1])
        else:
            updateCond = (updateCond | (existingDF[scdCol1] != updatesDF[scdCol1]))
    updatedDF = updatesDF.where((existingDF["current"] == lit("true")) & (updateCond))

    cols1: PostSubstituteDisabled = ['a']
    updateCond1 = None
    for scdCol2 in cols1:#skipLoopUnRolling
        if updateCond is None:
            updateCond1 = (existingDF[scdCol2] != updatesDF[scdCol2])
        else:
            updateCond1 = (updateCond | (existingDF[scdCol2] != updatesDF[scdCol2]))
    updatedDF1 = updatesDF.where((existingDF["current"] == lit("true")) & (updateCond1))
```

The previous code sample becomes the following:

```py
def testLoopUnRoll():
    myCols = ['a']
    cond = None

    for scdCol in myCols:
        if cond is None:
            cond = (existingDF[scdCol] != updatesDF[scdCol])
        else:
            cond = (cond | (existingDF[scdCol] != updatesDF[scdCol]))

    updateCond = (existingDF['a'] != updatesDF['a'])
    cols1 = ['a']

    for scdCol2 in cols1:
        if updateCond is None:
            updateCond1 = (existingDF[scdCol2] != updatesDF[scdCol2])
        else:
            updateCond1 = (updateCond | (existingDF[scdCol2] != updatesDF[scdCol2]))
```

- In above code sample, `SubstituteDisabled` (`myCols`) did not replace the variable so the entire loop was not optimized.
- In the first occurrence of `PostSubstituteDisabled` (`cols`), all instances of `cols` could be replaced so the original variable was removed.
- In the second occurrence of `PostSubstituteDisabled` (`cols1`), the for loop was marked to skip optimization (`skipLoopUnRolling`).
  Since at least one instance of the `cols1` variable was marked to avoid optimization, the variable could not be optimized.

## Disable all optimizations

You can turn off all optimizations by setting the optimize function stub to `False`.

```py
def optimizeCode(self) -> bool:
        return False
```
