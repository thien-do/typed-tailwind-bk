class Style {
  value = "";

  // Getter methods

  // Why "$":
  // - https://github.com/microsoft/TypeScript/issues/2361
  // - https://github.com/microsoft/TypeScript/issues/4538
  // - https://en.wikipedia.org/wiki/Regular_expression
  $(): string { return this.value; }

  [Symbol.toPrimitive](): string { return this.$(); }

  // Building methods

  add(value: string): Style {
    this.value = `${this.value} ${value}`;
    return this;
  }

  colorRed(): Style { return this.add("red"); }
  colorBlue(): Style { return this.add("blue"); }
  positionAbsolute(): Style { return this.add("absolute"); }
  positionRelative(): Style { return this.add("relative"); }
}
