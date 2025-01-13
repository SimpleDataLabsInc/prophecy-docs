---
title: Conditional Execution in Spark
id: conditional-execution
description: Guide on conditional Execution of a Gem
tags:
  - Conditional
  - Execution
---

This feature allows users to conditionally run or skip transformations within Gems and the Pipeline. It provides users with enhanced flexibility and control over their data processing scenarios.
In many cases, users may want to conditionally apply or skip specific transformations based on certain criteria. For example, if a particular scenario is true, they may want to skip a filter transformation in the Pipeline. With this feature, users can easily configure **Pass-through conditions** on Gems, enabling them to dynamically control whether a transformation is executed based on the condition's evaluation.
Additionally, there are scenarios where users may need to conditionally skip writing to a target and remove the corresponding Gem from the Pipeline. In such cases, users can configure **Removal conditions** on Gems, which not only skip the transformation but also remove the Gem and all downstream transformations associated with it.

Conditions can utilize Pipeline configurations and can also be provided at runtime, offering maximum flexibility and adaptability. Users can dynamically control the execution flow of their Pipeline by defining conditions that suit their specific requirements.

## How to configure Conditions

To configure a condition on a Gem, users can simply click the `...` (ellipsis) button on the Gem and select the "Add condition" option.
This opens a configuration panel where users can define the condition for the Gem. The conditions can be expressed in Scala or Python, depending on the language used in the project.

When a condition is set on a Gem, it is indicated by the (C) symbol appearing before the Gem name, providing a visual cue that a condition has been configured.

It's important to note that the conditions cannot access the data within the Pipeline. They are designed to evaluate based on Pipeline configurations and any other relevant factors that can be determined at runtime.

Additionally, when a Gem is set as a pass-through or removed due to a condition evaluation, the interims will not be displayed on the edges associated with that Gem.

## Pass-through Condition

Pass-through conditions provide a convenient way to skip the transformation of a Gem or subgraph and maintain the input data as the output data. This ensures that the data remains unchanged and passes through the Gem or subgraph without any modification.

To support pass-through functionality, the following conditions must be met:

1. Gem Connection: The Gem must be connected in the Pipeline, meaning it should have both an input port and an output port. This allows the data to flow through the Gem.

2. Port Configuration: The Gem can have either an equal input and output port configuration, where the same data is passed through, or a single input port and multiple output ports configuration. In both cases, the input data is preserved as the output data, maintaining the pass-through behavior.

3. Source and Targets: Pass-through conditions are not applicable to source and target elements within the Pipeline. These elements represent the data source and destination and do not involve any transformation logic.
   The same conditions mentioned above also apply to subgraphs. Subgraphs can have pass-through behavior if they meet the requirements of having connected input and output ports, as well as appropriate port configurations.

## Removal Condition

In addition to pass-through conditions, we have introduced removal conditions that allow users to skip writing data to a target and remove all the Gems/transformations in the Pipeline after the current Gem. This feature provides users with greater control over the Pipeline flow and allows them to conditionally exclude specific portions of the Pipeline execution.
Unlike pass-through conditions, removal conditions can be applied to any Gem in the Pipeline. However, it's important to note that when a removal condition is set on a Gem, users need to handle the missing data in the Gem logic, as the inputs may be unavailable.

Currently, SetOperations and Script Gems in the Pipeline are capable of handling missing inputs. For other Gems, if any input is missing, the Gem will be removed along with all downstream transformations. The same behavior applies to subgraphs as well.

To modify the handling of missing inputs in other Gems, users can update the Gem specs in the [Gem Builder](docs/extensibility/package-hub/gem-builder.md) by adding a boolean parameter called allInputsRequired. By setting this parameter to true or false, users can determine whether a Gem should be removed if any of its inputs are missing.

This customization option allows users to tailor the behavior of the Pipeline and the handling of missing data based on their specific requirements.
