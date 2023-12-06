import { defineComponent } from "vue";

export const Test2 = defineComponent(
  <TStr extends "one" | "two", TNum extends TStr extends "one" ? 1 : 2>(props: {
    str: TStr;
    num: TNum;
    numFn: (num: TNum) => TNum;
  }) => {
    return () => props.str;
  }
);
