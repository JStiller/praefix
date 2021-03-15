export default (name: string, context: any): Function => {
  const vendorPrefixes = ["o", "moz", "ms", "webkit"];

  if (name in context && typeof context[name] === "function") {
    return context[name];
  }

  const prefixedVendorFunctions = vendorPrefixes
    .map((praefix) => {
      const estimatedName = name.charAt(0).toUpperCase().concat(name.slice(1));
      return praefix.concat(estimatedName);
    })
    .filter((prefixedFunctionName) => prefixedFunctionName in context)
    .map(filteredPrefixedFunctionName => context[filteredPrefixedFunctionName]);

  return prefixedVendorFunctions[0];
};
