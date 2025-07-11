import { Module } from '@nestjs/common';

// Domain
import { ProductRepository } from './domain/repositories/product.repository';

// Application (Use cases)
import { CreateProductUseCase } from './application/use-cases/product/create-product.usecase';

// Infrastructure (Concrete implementation - adapters, ormModules, etc.) 

// Controllers
import { AppController } from './app.controller';

// Services
import { AppService } from './app.service';
import { StripeService } from './infrastructure/services/stripe-payment.service';






@Module({
  imports: [
    // Import necessary modules here (ormModules, etc.)
  ],
  controllers: [
    // Controllers (entry points – e.g., HTTP)
    AppController
  ],
  providers: [
    // Use cases (Application layer)
    CreateProductUseCase,


    // Concrete implementations (Infrastructure layer)
    AppService,
    StripeService,
    

    // Bind domain abstractions to infrastructure implementations
    // {
    //   provide: ProductRepository,
    //   useClass: ProductPrismaAdapter,
    // },
  ],
})
export class AppModule {}
