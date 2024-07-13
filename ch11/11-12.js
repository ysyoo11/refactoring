function localShippingRules(data) {
  if (!data) throw new OrderProcessingError(-23);

  return new ShippingRules(data);
}

class OrderProcessingError extends Error {
  constructor(errorCode) {
    super();
    this.errorCode = errorCode;
  }
}

try {
  const result = localShippingRules();
} catch (error) {
  if (error instanceof OrderProcessingError) {
    console.log(error);
  }
}
