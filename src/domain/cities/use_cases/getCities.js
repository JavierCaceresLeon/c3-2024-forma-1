import citiesRepository from '../repository/worldCitiesRespository'

exports.getAllCitiesUseCase = (ctx) => {
    ctx.body = citiesRepository.getAllCitiesRepository()
    return ctx
}

exports.getCitiesByCountryUseCase = (ctx) => {
    const country = ctx.params.country;

    // Validar que el parámetro `country` tenga al menos 3 caracteres
    if (country.length < 3) {
        ctx.status = 400;
        ctx.body = { message: 'El país/ciudad ingresado debe tener al menos 3 caracteres' };
        return ctx;
    }

    // Validar que el parámetro `country` no contenga caracteres numéricos
    if (!/^[A-Za-z]+$/.test(country)) {
        ctx.status = 400;
        ctx.body = { message: 'Solo se aceptan caracteres no numéricos' };
        return ctx;
    }

    const cities = citiesRepository.searchCitiesByCountryName(country);
    if (cities.length === 0) {
        ctx.body = { message: 'No se encontraron ciudades para el país ingresado' };
    } else {
        ctx.body = cities;
    }
    return ctx;
}

exports.getCitiesByCityNameAndCountryUseCase = (ctx) => {
    ctx.body = citiesRepository.searchCityByCityNameAndCountry(ctx.params.city, ctx.params.country)
    return ctx
}