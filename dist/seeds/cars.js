"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
function seed(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        // Deletes ALL existing entries
        yield knex("cars").del();
        // Inserts seed entries
        yield knex("cars").insert([
            {
                name: "Toyota Innova",
                harga: 500000000,
                foto: "https://res.cloudinary.com/dcyojno0c/image/upload/v1716047808/Challenge_5/ukb5l6zqrt5c6rlvdjw4.jpg",
                start_rent: new Date(),
                finish_rent: new Date(),
                created_at: new Date(),
                updated_at: new Date(),
            },
        ]);
    });
}
exports.seed = seed;
//# sourceMappingURL=cars.js.map