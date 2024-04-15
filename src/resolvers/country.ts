import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { Country } from "../entities/country";
import { DeepPartial } from "typeorm";

@Resolver()
export class CountryResolver {
    @Mutation(() => Country)
    async createCountry(
        @Arg("code") code: string,
        @Arg("name") name: string,
        @Arg("emoji") emoji: string
    ): Promise<Country> {
        const country = Country.create({
            code,
            name,
            emoji
        }  as DeepPartial<Country>);
        await country.save();
        return country;
    }

    @Query(() => [Country])
    async countries(): Promise<Country[]> {
        return Country.find();
    }

    @Query(() => Country, { nullable: true })
    async countryByCode(@Arg("code") code: string): Promise<Country | null> {
        return await Country.findOne({ where: { code } });
    }
}
