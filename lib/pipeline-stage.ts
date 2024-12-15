import { StackProps, Stage } from "aws-cdk-lib";
import { Construct } from "constructs";
import { HabitTrackerApiStack } from "./habit-tracker-api-stack";

export class PipelineStage extends Stage {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    new HabitTrackerApiStack(this, "HabitTrackerApiStack");
  }
}
