import {Injectable} from '@angular/core';
import {Listing} from "../models/listing";

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  private listings: Listing[] = [
    {
      id: 0,
      type: "casă",
      title: "Casa super ieftină",
      stars: 3,
      description: `Super șmechera ieftină ia-mi-o drecu odată de pe cap,Where there's water on Earth, you find life as we know it.
            So if you find water somewhere else, it becomes a remarkable draw to look closer to see if life of any kind is there, even if it's bacterial, which would be extraordinary for the field of biology.
      As an educator, I try to get people to be fundamentally curious and to question ideas that they might have or that are shared by others. In that state of mind, they have earned a kind of inoculation against the fuzzy thinking of these weird ideas floating around out there. Whether or not people go into space or serve the space industry, they will have the sensitivity to those fields necessary to stimulate unending innovation in the technological fields, and it's that innovation in the 21st century that will drive tomorrow's economies.Stephen Hawking's been watching too many Hollywood movies. I think the only kind aliens in Hollywood are the ones created by Steven Spielberg - 'Close Encounters of the Third Kind' and 'E.T.,' for example. All other aliens are trying to suck our brains out.
      I was transformed by picking up a pair of binoculars and looking up, and that's hard to do for a city kid because when you look up you just see buildings - and really, your first thought is to look in people's windows.
      So to look out of the space - out of living space - and look up to the sky, binoculars go far, literally and figuratively.`,
      sqm: 50,
      rooms: 3,
      bathrooms: 1,
      city: "Dumbrăvița",
      state: "România",
      url: "https://www.mydomaine.com/thmb/qfc13qpHnxMkqp8Ja-XwYjC1JQ8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg"
    },
    {
      id: 1,
      type: "casă",
      title: "Casă cam scumpuță n-am să te mint fratele meu",
      stars: 4,
      description: "In science, if you don't do it, somebody else will. Whereas in art, if Beethoven didn't compose the 'Ninth Symphony,' no one else before or after is going to compose the 'Ninth Symphony' that he composed; no one else is going to paint 'Starry Night' by van Gogh.",
      sqm: 20,
      rooms: 1,
      bathrooms: 1,
      city: "Timișoara",
      state: "România",
      url: "https://www.mydomaine.com/thmb/WLvbgTPsAoq4QPsbLkYpxy3Ugz0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/OutEast-14371a850d1b4747b41a9f5ec31c7afd.jpg"
    },
    {
      id: 2,
      type: "casă",
      title: "O baracă",
      stars: 5,
      description: "I want to know what dark matter and dark energy are comprised of. They remain a mystery, a complete mystery. No one is any closer to solving the problem than when these two things were discovered.",
      sqm: 12,
      rooms: 1,
      bathrooms: 0,
      city: "Cluj-Napoca",
      state: "România",
      url: "https://www.mydomaine.com/thmb/uYobv04JAzweRmKAceORrM6ycUs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1369-03-copy-1b6760fab1984e4393ca4082b2780c7c.jpg"
    },
    {
      id: 3,
      type: "casă",
      title: "Birt",
      stars: 4,
      description: "The universe is large and old, and the ingredients for life as we know it are everywhere, so there's no reason to think that Earth would be unique in that regard. Whether of not the life became intelligent is a different question, and we'll see if we find that.",
      sqm: 250,
      rooms: 3,
      bathrooms: 1,
      city: "Păpuceni",
      state: "România",
      url: "https://www.mydomaine.com/thmb/qfc13qpHnxMkqp8Ja-XwYjC1JQ8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg"
    },
    {
      id: 4,
      type: "casă",
      title: "Condominium de lux Central Park",
      stars: 1,
      description: "As an educator, I try to get people to be fundamentally curious and to question ideas that they might have or that are shared by others. In that state of mind, they have earned a kind of inoculation against the fuzzy thinking of these weird ideas floating around out there.",
      sqm: 35,
      rooms: 3,
      bathrooms: 1,
      city: "Sânmartin",
      state: "România",
      url: "https://media.architecturaldigest.com/photos/5b30dd66adc14f7b2cbd7d5f/16:9/w_2580,c_limit/036%20MONACELLI12-48-45A.jpg"
    },
    {
      id: 5,
      type: "casă",
      title: "Casa super ieftină",
      stars: 2,
      description: `Super șmechera ieftină ia-mi-o drecu odată de pe cap,Where there's water on Earth, you find life as we know it.
            So if you find water somewhere else, it becomes a remarkable draw to look closer to see if life of any kind is there, even if it's bacterial, which would be extraordinary for the field of biology.
      As an educator, I try to get people to be fundamentally curious and to question ideas that they might have or that are shared by others. In that state of mind, they have earned a kind of inoculation against the fuzzy thinking of these weird ideas floating around out there. Whether or not people go into space or serve the space industry, they will have the sensitivity to those fields necessary to stimulate unending innovation in the technological fields, and it's that innovation in the 21st century that will drive tomorrow's economies.Stephen Hawking's been watching too many Hollywood movies. I think the only kind aliens in Hollywood are the ones created by Steven Spielberg - 'Close Encounters of the Third Kind' and 'E.T.,' for example. All other aliens are trying to suck our brains out.
      I was transformed by picking up a pair of binoculars and looking up, and that's hard to do for a city kid because when you look up you just see buildings - and really, your first thought is to look in people's windows.
      So to look out of the space - out of living space - and look up to the sky, binoculars go far, literally and figuratively.`,
      sqm: 50,
      rooms: 3,
      bathrooms: 1,
      city: "Dumbrăvița",
      state: "România",
      url: "https://www.mydomaine.com/thmb/qfc13qpHnxMkqp8Ja-XwYjC1JQ8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg"
    },
    {
      id: 6,
      type: "casă",
      title: "Casă cam scumpuță n-am să te mint fratele meu",
      stars: 5,
      description: "In science, if you don't do it, somebody else will. Whereas in art, if Beethoven didn't compose the 'Ninth Symphony,' no one else before or after is going to compose the 'Ninth Symphony' that he composed; no one else is going to paint 'Starry Night' by van Gogh.",
      sqm: 20,
      rooms: 1,
      bathrooms: 1,
      city: "Timișoara",
      state: "România",
      url: "https://www.mydomaine.com/thmb/WLvbgTPsAoq4QPsbLkYpxy3Ugz0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/OutEast-14371a850d1b4747b41a9f5ec31c7afd.jpg"
    },
    {
      id: 7,
      type: "casă",
      title: "O baracă",
      stars: 4,
      description: "I want to know what dark matter and dark energy are comprised of. They remain a mystery, a complete mystery. No one is any closer to solving the problem than when these two things were discovered.",
      sqm: 12,
      rooms: 1,
      bathrooms: 0,
      city: "Cluj-Napoca",
      state: "România",
      url: "https://www.mydomaine.com/thmb/uYobv04JAzweRmKAceORrM6ycUs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1369-03-copy-1b6760fab1984e4393ca4082b2780c7c.jpg"
    },
    {
      id: 8,
      type: "casă",
      title: "Birt",
      stars: 4,
      description: "The universe is large and old, and the ingredients for life as we know it are everywhere, so there's no reason to think that Earth would be unique in that regard. Whether of not the life became intelligent is a different question, and we'll see if we find that.",
      sqm: 250,
      rooms: 3,
      bathrooms: 1,
      city: "Păpuceni",
      state: "România",
      url: "https://www.mydomaine.com/thmb/qfc13qpHnxMkqp8Ja-XwYjC1JQ8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg"
    },
    {
      id: 9,
      type: "casă",
      title: "Condominium de lux Central Park",
      stars: 3,
      description: "As an educator, I try to get people to be fundamentally curious and to question ideas that they might have or that are shared by others. In that state of mind, they have earned a kind of inoculation against the fuzzy thinking of these weird ideas floating around out there.",
      sqm: 35,
      rooms: 3,
      bathrooms: 1,
      city: "Sânmartin",
      state: "România",
      url: "https://media.architecturaldigest.com/photos/5b30dd66adc14f7b2cbd7d5f/16:9/w_2580,c_limit/036%20MONACELLI12-48-45A.jpg"
    },
  ]
  constructor() {
  }


  addListing(property:Listing){
    property.id=this.listings.length;
    property.stars=Math.floor(Math.random()*6)
    this.listings.push(property)
  }
  getListings(): Listing[] {
    return this.listings;
  }

  getListingByID(id: number): Listing | undefined {
    return this.listings.find(listing => listing.id === id);
  }
}
