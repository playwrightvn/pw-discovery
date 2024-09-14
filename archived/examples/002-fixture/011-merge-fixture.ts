import { mergeTests } from "@playwright/test";
import { test as t1 } from "./004-fixture";
import { test as t2 } from "./008-fixture";

export const test = mergeTests(t1, t2);