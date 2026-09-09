const sampleListings = [
{
title: "Luxury Beach Villa",
description: "Enjoy a luxurious beachfront villa with breathtaking sea views and a private swimming pool.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
},
price: 4500,
location: "Goa",
country: "India",
},
{
title: "Cozy Mountain Cabin",
description: "A peaceful wooden cabin surrounded by beautiful mountains and pine forests.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
},
price: 1800,
location: "Manali",
country: "India",
},
{
title: "Modern City Apartment",
description: "Stay in the heart of the city with modern interiors and premium facilities.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
},
price: 3200,
location: "Bengaluru",
country: "India",
},
{
title: "Lake View Cottage",
description: "Relax in a peaceful cottage overlooking a beautiful lake.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
},
price: 2200,
location: "Nainital",
country: "India",
},
{
title: "Desert Luxury Camp",
description: "Luxury camping experience under the stars in the Thar Desert.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
},
price: 2700,
location: "Jaisalmer",
country: "India",
},
{
title: "Tea Estate Bungalow",
description: "Stay amidst lush green tea gardens with stunning valley views.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
},
price: 2400,
location: "Munnar",
country: "India",
},
{
title: "Beach Resort",
description: "Beautiful beach resort with luxury rooms and ocean views.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
},
price: 3500,
location: "Pondicherry",
country: "India",
},
{
title: "Backwater Houseboat",
description: "Experience the famous Kerala backwaters on a luxury houseboat.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
},
price: 2800,
location: "Alappuzha",
country: "India",
},
{
title: "Forest Retreat",
description: "Nature retreat surrounded by dense forests and wildlife.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
},
price: 2100,
location: "Coorg",
country: "India",
},
{
title: "Snow View Chalet",
description: "Cozy chalet with breathtaking snow-covered mountain views.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
},
price: 3100,
location: "Shimla",
country: "India",
},
{
title: "Riverside Cottage",
description: "Wake up to the soothing sound of the river in this peaceful riverside cottage.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
},
price: 1900,
location: "Kasol",
country: "India",
},
{
title: "Island Villa",
description: "Enjoy a luxurious island getaway with crystal-clear beaches and tropical weather.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
},
price: 4800,
location: "Andaman",
country: "India",
},
{
title: "Lake Palace",
description: "Stay in a magnificent palace overlooking the beautiful Lake Pichola.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
},
price: 5500,
location: "Udaipur",
country: "India",
},
{
title: "City Loft",
description: "Modern loft apartment with stylish interiors and premium amenities.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
},
price: 3000,
location: "Mumbai",
country: "India",
},
{
title: "Skyline Apartment",
description: "Luxury apartment offering stunning skyline views and excellent facilities.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
},
price: 3600,
location: "Delhi",
country: "India",
},
{
title: "Royal Residency",
description: "Experience royal hospitality in this heritage property with modern comforts.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
},
price: 2600,
location: "Mysuru",
country: "India",
},
{
title: "Ocean Breeze Villa",
description: "Relax with panoramic sea views and refreshing ocean breezes.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
},
price: 3900,
location: "Kovalam",
country: "India",
},
{
title: "Sunset Cottage",
description: "Watch breathtaking sunsets from this cozy beachside cottage.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
},
price: 2300,
location: "Gokarna",
country: "India",
},
{
title: "Valley Cabin",
description: "Escape to a peaceful valley surrounded by lush green hills.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
},
price: 2100,
location: "Kodaikanal",
country: "India",
},
{
title: "Nature Camp",
description: "Reconnect with nature in this eco-friendly campsite with scenic surroundings.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
},
price: 1700,
location: "Wayanad",
country: "India",
},
{
title: "Luxury Penthouse",
description: "Experience luxury living with panoramic city views and world-class amenities.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
},
price: 5200,
location: "Hyderabad",
country: "India",
},
{
title: "Eco Farm Stay",
description: "Stay on a peaceful organic farm surrounded by greenery and fresh air.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
},
price: 1800,
location: "Sakleshpur",
country: "India",
},
{
title: "Cliff House",
description: "Beautiful cliffside accommodation offering spectacular ocean views.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
},
price: 3400,
location: "Varkala",
country: "India",
},
{
title: "Garden Villa",
description: "Elegant villa with a spacious garden, swimming pool, and peaceful surroundings.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd",
},
price: 3900,
location: "Pune",
country: "India",
},
{
title: "River Resort",
description: "Relax beside a scenic river with luxurious accommodation and outdoor activities.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
},
price: 2600,
location: "Hampi",
country: "India",
},
{
title: "Mountain Escape",
description: "Escape to the mountains for fresh air, hiking trails, and peaceful nights.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
},
price: 2300,
location: "Auli",
country: "India",
},
{
title: "Jungle Lodge",
description: "Adventure awaits in this jungle lodge surrounded by wildlife and nature.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
},
price: 2800,
location: "Bandipur",
country: "India",
},
{
title: "Beach Bungalow",
description: "Private bungalow just steps away from the sandy beach and crystal-clear sea.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
},
price: 3100,
location: "Diu",
country: "India",
},
{
title: "Modern Studio",
description: "Compact and stylish studio apartment perfect for solo travelers and couples.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
},
price: 2100,
location: "Chennai",
country: "India",
},
{
title: "Historic Mansion",
description: "Experience the elegance of a beautifully restored heritage mansion.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
},
price: 4200,
location: "Lucknow",
country: "India",
},

{
title: "Palm Grove Villa",
description: "Beautiful villa surrounded by palm trees, perfect for a tropical vacation.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
},
price: 4100,
location: "Kochi",
country: "India",
},
{
title: "Heritage Fort Stay",
description: "Experience royal living in a historic fort with luxurious rooms and traditional hospitality.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
},
price: 5500,
location: "Jodhpur",
country: "India",
}
];




const categories = [
    "Trending",
    "Mountains",
    "Rooms",
    "Trending",
    "Camping",
    "Trending",
    "Amazing Pools",
    "Trending",
    "Camping",
    "Mountains",
    "Camping",
    "Trending",
    "Iconic Cities",
    "Rooms",
    "Rooms",
    "Iconic Cities",
    "Amazing Pools",
    "Trending",
    "Mountains",
    "Camping",
    "Rooms",
    "Camping",
    "Trending",
    "Amazing Pools",
    "Camping",
    "Mountains",
    "Camping",
    "Trending",
    "Rooms",
    "Castles",
    "Amazing Pools",
    "Castles"
];

sampleListings.forEach((listing, index) => {
    listing.category = categories[index];
});

module.exports = { data: sampleListings };

