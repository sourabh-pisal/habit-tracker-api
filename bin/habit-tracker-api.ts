#!/home/linuxbrew/.linuxbrew/opt/node/bin/node
import * as cdk from "aws-cdk-lib";
import { HabitTrackerApiStack } from "../lib/habit-tracker-api-stack";

const app = new cdk.App();
new HabitTrackerApiStack(app, "HabitTrackerApiStack", { env: { region: "eu-west-1" } });
