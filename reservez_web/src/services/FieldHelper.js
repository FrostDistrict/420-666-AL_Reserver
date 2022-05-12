export function GetCategories(str){
    let categories = [];
    if (str === null || str.length === 0){
        return categories;
    }
    if (str.length === 1){
        categories.push(GetCategoryString(parseInt(str)));
        return categories;
    }
    const intArray = ParseToIntArray(str);
    return intArray.map(id => GetCategoryString(id));
}

export function GetOffers(str){
    let offers = [];
    if (str === null || str.length === 0 || str === '0'){
        return offers;
    }
    if (str.length === 1){
        offers.push(GetOffersString(parseInt(str)));
        return offers;
    }
    const intArray = ParseToIntArray(str);
    return intArray.map(id => GetOffersString(id));
}

export function FormatPhoneNumber(phoneNb){
    return phoneNb.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

function GetCategoryString(id)
{
    switch (id)
    {
        case 1 : return "Chefs créateurs";
        case 2 : return "Pubs et microbrasseries";
        case 3 : return "Délices d'ici";
        case 4 : return "Restaurants";
        case 5 : return "Bonnes tables";
        case 6 : return "Cafés & Bistros";
        case 7 : return "Saveurs du monde";
        case 8 : return "Brasseries";
        case 9 : return "Cuisine familiale";
        case 10 : return "Restauration rapide"
        default : return "Restaurants";
    }
}

function GetOffersString(id)
{
    switch (id)
    {
        case 1 : return "Déjeuner";
        case 2 : return "Brunch";
        case 3 : return "Dîner";
        case 4 : return "Souper";
        default : return "Non disponible";
    }
}

function ParseToIntArray(str){
    return str.split(',').map( Number );
}