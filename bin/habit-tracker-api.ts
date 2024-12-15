#!/home/linuxbrew/.linuxbrew/opt/node/bin/node
import { App, Tags } from "aws-cdk-lib";
import { PipelineStack } from "../lib/pipeline-stack";

const app = new App();

const pipelineStack = new PipelineStack(app, "HabitTrackerApiStack", { env: { region: "eu-west-1" } });
Tags.of(pipelineStack).add("project", "habit-tracker-api");

app.synth();
