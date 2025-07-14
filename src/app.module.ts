import { Module } from '@nestjs/common';

// Domain
import { ProductRepository } from './domain/repositories/product.repository';

// Application (Use cases)
import { CreateProductUseCase } from './application/use-cases/product/create-product.usecase';

// Infrastructure (Concrete implementation - adapters, ormModules, etc.) 
import { ProductOrmAdapter } from './infrastructure/repositories/orm/product/product-orm.adapter';

// Controllers


// Services

import { StripeService } from './infrastructure/services/stripe-payment.service';


@Module({
  imports: [
    // Import necessary modules here (ormModules, etc.)
  ],
  controllers: [
    // Controllers (entry points – e.g., HTTP)
  ],
  providers: [
    // Use cases (Application layer)
    CreateProductUseCase,


    // Concrete implementations (Infrastructure layer)
    StripeService,
    

    // Bind domain abstractions to infrastructure implementations
    {
      provide: ProductRepository,
      useClass: ProductOrmAdapter,
    },
  ],
})
export class AppModule {}
