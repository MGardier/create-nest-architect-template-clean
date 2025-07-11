export class CreateProductInputDto {
    name:               string;
    quantity:           number;
    externalPriceId:    string | null;
    externalProductId:  string | null;
}