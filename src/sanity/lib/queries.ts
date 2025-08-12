import { defineQuery } from 'next-sanity'

// Query to get all active casino brands
export const casinoBrandsQuery = defineQuery(`
  *[_type == "casinoBrand" && isActive == true] | order(order asc, name asc) {
    _id,
    name,
    logo,
    description,
    rating,
    bonus,
    features,
    pros,
    cons,
    website
  }
`)

// Query to get a single casino brand by ID
export const casinoBrandQuery = defineQuery(`
  *[_type == "casinoBrand" && _id == $id][0] {
    _id,
    name,
    logo,
    description,
    rating,
    bonus,
    features,
    pros,
    cons,
    website
  }
`)

// Query to get casino brands with specific features
export const casinoBrandsByFeaturesQuery = defineQuery(`
  *[_type == "casinoBrand" && isActive == true && $feature in features] | order(rating desc, name asc) {
    _id,
    name,
    logo,
    description,
    rating,
    bonus,
    features,
    pros,
    cons,
    website
  }
`)

// Query to get top rated casino brands
export const topRatedCasinoBrandsQuery = defineQuery(`
  *[_type == "casinoBrand" && isActive == true && defined(rating)] | order(rating desc, name asc)[0...$limit] {
    _id,
    name,
    logo,
    description,
    rating,
    bonus,
    features,
    pros,
    cons,
    website
  }
`)
