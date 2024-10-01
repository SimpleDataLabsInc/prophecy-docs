---
sidebar_position: 2
title: Optimization functions
id: optimization-functions
description: Optimization functions
tags:
  - gem builder
---

This page includes advanced tips and optimization functions that you can use in the Gem builder.

## Turn off loop unrolling

You can turn off loop unrolling by adding `# skipLoopUnRolling` as a comment on the same line as the for loop.

![Turn off loop unrolling example](img/turn-off-loop-unrolling.png)

## Disable all optimizations

You can turn off all optimizations by setting the optimize function stub to False.

```py
def optimizeCode(self) -> bool:
        return False
```

## Replace variables and optimize objects

You can use two functions to replace variables and optimize objects.

- `SubstituteDisabled` - Disables the replacement of this variable with the value in all places it's used.

- `PostSubstituteDisabled` - Uses the replacement and tries to optimize. After optimization, if the value replaced still exists, then it creates that object back.

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

- In above code sample, `SubstituteDisabled` (`myCols`) didn’t replace the variable so the entire loop didn’t get optimized.
- In the first occurrence of `PostSubstituteDisabled` (`cols`), the function went ahead and substituted it. However, post substitution it was able to completely optimize that variable and its usages, so the variable didn’t get recreated in the final code.
- In the second occurrence of `PostSubstituteDisabled` (`cols1`), the function went ahead and substituted it. However, the for loop that it's used in was marked to skip optimization (`skipLoopUnRolling`), so post optimization it recreated the original variable (`cols1`) back.
