function estimateDelivery(packageType) {
    switch (packageType.toLowerCase()) {
        case "standard":
            console.log("Estimated delivery time is 3-5 days.");
            break;
        case "express":
            console.log("Estimated delivery time is 1-2 days.");
            break;
        case "overnight":
            console.log("Package will be delivered the next day.");
            break;
        default:
            console.log("Invalid package type.");
    }
  }
  
  estimateDelivery('Express');