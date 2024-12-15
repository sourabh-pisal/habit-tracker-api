import { Stack, StackProps } from "aws-cdk-lib";
import { CodePipeline, CodePipelineSource, ShellStep } from "aws-cdk-lib/pipelines";
import { Construct } from "constructs";
import { PipelineStage } from "./pipeline-stage";

export class PipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const codePipeline = new CodePipeline(this, "HabitTrackerApiPipeline", {
      pipelineName: "HabitTrackerApiPipeline",
      synth: new ShellStep("synth", {
        input: CodePipelineSource.gitHub("sourabh-pisal/habit-tracker-api", "main"),
        commands: ["npm ci", "npm run build", "npm run cdk synth"],
      }),
    });

    codePipeline.addStage(new PipelineStage(this, "prod", { env: { region: "eu-west-1" } }));

    codePipeline.buildPipeline();
  }
}