const product = {
    productName: "Parker Jotter Standard CT Ball Pen (Black)",
    rating: 4.2,
    isDeal: true,
    price: 270,
    offer: 5
};

product["productName"] = "Black pen";
product["price"] = 350;

console.log(product);
console.log(product.productName);
console.log(product.isDeal);
console.log(product["price"]);

console.log(typeof product)


const profile = {
    profileId : "Alomj257",
    isFollow: true,
    post: 195,
    followers: "569K",
    followings: 4,
    fullName: 'Jahangir Alom',
    bio: "I am jahangir alom a full stack developer"
};

console.log(profile);
console.log(typeof profile.profileId);
console.log(typeof profile["profileId"]);