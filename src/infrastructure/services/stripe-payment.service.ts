import { Injectable } from "@nestjs/common";
import { PaymentService } from "src/domain/services/payment.service";

// Example of domain implementation in infrastructure

@Injectable()
export class StripeService implements PaymentService {
    constructor() {}

    // async checkout(checkoutData: ExtendedCheckoutSessionInputDto): Promise<StripeProductOutputDto> {
        
    // }
}