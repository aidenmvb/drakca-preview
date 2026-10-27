/* Public listing copy. Do not invent prices, photos, sizes, or floor plans.
   Set open: true only when someone can move in now. Commercial search
   matches Commercial, Mixed-use, Office, and Retail. */
const DRAKA = {
  name: "DRAKA",
  firm: "DL Management",
  contact: {
    phone: "202-413-9222",
    phoneHref: "tel:+12024139222",
    email: "drakaLLC@gmail.com",
    emailHref: "mailto:drakaLLC@gmail.com",
  },
  base: "Bethesda, Maryland",
  markets: ["Maryland","Virginia","Washington, D.C."],
  people: [
    { name: "Chantal", role: "Principal" },
    { name: "Lisette Attias", role: "Principal" }
  ],
  properties: [
    {
      id: "lansdowne-1607",
      name: "1607 Lansdowne Way",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Silver Spring",
      street: "1607 Lansdowne Way",
      role: "Owned",
      beds: "4",
      baths: "3",
      scale: "1,216 sq ft",
      price: "$6,000/month",
      available: "December 2026",
      summary: "Four-bedroom house in Silver Spring, $6,000 a month from December 2026.",
      story: [
        "1607 Lansdowne Way is a single-family house in Silver Spring, offered for lease at $6,000 a month beginning December 2026.",
        "The house has four bedrooms, three bathrooms, and about 1,216 square feet. Heat is forced air, and a washer, dryer, and refrigerator are included. Cats and small dogs are allowed. The lease is one year, and the tenant takes care of utilities, the lawn, and the gutters."
      ]
    },
    {
      id: "11212-grandview-avenue-unit-103",
      name: "11212 Grandview Avenue, Unit 103",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Wheaton",
      street: "11212 Grandview Avenue",
      unit: "Unit 103",
      role: "Owned",
      summary: "Residence at 11212 Grandview Avenue in Wheaton.",
      story: [
        "Unit 103 is a residence at 11212 Grandview Avenue in Wheaton."
      ]
    },
    {
      id: "11212-grandview-avenue-unit-107",
      name: "11212 Grandview Avenue, Unit 107",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Wheaton",
      street: "11212 Grandview Avenue",
      unit: "Unit 107",
      role: "Owned",
      summary: "Residence at 11212 Grandview Avenue in Wheaton.",
      story: [
        "Unit 107 is a residence at 11212 Grandview Avenue in Wheaton."
      ]
    },
    {
      id: "1530-key-boulevard-atrium-104",
      name: "1530 Key Boulevard, Atrium 104",
      intent: "rent",
      type: "Residential",
      state: "Virginia",
      neighborhood: "Arlington",
      street: "1530 Key Boulevard",
      unit: "Atrium 104",
      role: "Owned",
      beds: "2",
      baths: "2",
      scale: "1,230 sq ft",
      image: "images/key-boulevard-104.jpg",
      alt: "Living room at 1530 Key Boulevard, Atrium 104",
      summary: "Two-bedroom condominium at The Atrium, with a private patio and garage parking.",
      story: [
        "Atrium 104 is a two-bedroom, two-bathroom condominium at 1530 Key Boulevard, in The Atrium in Arlington. The unit is about 1,230 square feet.",
        "It has a private concrete patio of about 360 square feet and an assigned space in the garage. Inside, the home has forced-air heat, hardwood and tile floors, and a washer, dryer, dishwasher, and refrigerator. The photograph is the living room.",
        "The Atrium has a front desk, a fitness center, an outdoor pool, and tennis courts."
      ]
    },
    {
      id: "1530-key-boulevard-unit-608",
      name: "1530 Key Boulevard, Unit 608",
      intent: "rent",
      type: "Residential",
      state: "Virginia",
      neighborhood: "Arlington",
      street: "1530 Key Boulevard",
      unit: "Unit 608",
      role: "Owned",
      beds: "1",
      baths: "2",
      scale: "1,125 sq ft",
      summary: "One-bedroom condominium at The Atrium, with a balcony and garage parking.",
      story: [
        "Unit 608 is a one-bedroom condominium at 1530 Key Boulevard, in The Atrium in Arlington. The unit is about 1,125 square feet and has two bathrooms.",
        "A balcony of about 90 square feet opens off the unit, and parking is an assigned space in the garage.",
        "The Atrium has a front desk, a fitness center, an outdoor pool, and tennis courts."
      ]
    },
    {
      id: "key-boulevard",
      name: "Key Boulevard",
      intent: "rent",
      type: "Residential",
      state: "Virginia",
      neighborhood: "Arlington",
      street: "Key Boulevard",
      role: "Owned",
      reviewOnly: true,
      unitUnspecified: true,
      beds: "2",
      baths: "2",
      scale: "1,230 sq ft",
      price: "$5,000/month",
      available: "November 1",
      summary: "Two-bedroom condominium on Key Boulevard in Arlington, about 1,230 square feet.",
      story: [
        "This is a two-bedroom, two-bathroom condominium on Key Boulevard in Arlington, about 1,230 square feet, offered at $5,000 a month from November 1.",
        "The home has a private patio, a washer and dryer, and central air and heat. Parking is an assigned garage space. The building has a fitness center and a tennis court. It is wheelchair accessible, smoking is not permitted, and pets are accepted with an additional deposit."
      ]
    },
    {
      id: "1728-1730-connecticut-avenue-northwest-lower-level",
      name: "1728-1730 Connecticut Avenue Northwest, Lower Level",
      intent: "both",
      type: "Commercial",
      state: "Washington, D.C.",
      street: "1728-1730 Connecticut Avenue Northwest",
      unit: "Lower Level",
      role: "Owned",
      summary: "Commercial lower level on Connecticut Avenue, for lease and for sale.",
      story: [
        "The lower level at 1728-1730 Connecticut Avenue Northwest is commercial space in Washington, D.C., offered for lease and for sale."
      ]
    },
    {
      id: "1728-1730-connecticut-avenue-northwest-unit-4a",
      name: "1728-1730 Connecticut Avenue Northwest, Unit 4A",
      intent: "both",
      type: "Residential",
      state: "Washington, D.C.",
      street: "1728-1730 Connecticut Avenue Northwest",
      unit: "Unit 4A",
      role: "Owned",
      summary: "Residence on Connecticut Avenue, for lease and for sale.",
      story: [
        "Unit 4A is a residence at 1728-1730 Connecticut Avenue Northwest in Washington, D.C., offered for lease and for sale."
      ]
    },
    {
      id: "3323-bunker-hill-road",
      name: "3323 Bunker Hill Road",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3323 Bunker Hill Road",
      role: "Owned",
      summary: "Home at 3323 Bunker Hill Road in Mount Rainier.",
      story: [
        "3323 Bunker Hill Road is a home in Mount Rainier. Unit 1 and Unit 2 are listed separately."
      ]
    },
    {
      id: "3323-bunker-hill-road-unit-1",
      name: "3323 Bunker Hill Road, Unit 1",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3323 Bunker Hill Road",
      unit: "Unit 1",
      role: "Owned",
      summary: "Unit 1 at 3323 Bunker Hill Road in Mount Rainier.",
      story: [
        "Unit 1 is a residence at 3323 Bunker Hill Road in Mount Rainier."
      ]
    },
    {
      id: "3323-bunker-hill-road-unit-2",
      name: "3323 Bunker Hill Road, Unit 2",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3323 Bunker Hill Road",
      unit: "Unit 2",
      role: "Owned",
      summary: "Unit 2 at 3323 Bunker Hill Road in Mount Rainier.",
      story: [
        "Unit 2 is a residence at 3323 Bunker Hill Road in Mount Rainier."
      ]
    },
    {
      id: "3401-bunker-hill-road-unit-3",
      name: "3401 Bunker Hill Road, Unit 3",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3401 Bunker Hill Road",
      unit: "Unit 3",
      role: "Owned",
      available: "Now",
      open: true,
      price: "$1,000/month",
      image: "images/3401-bunker-hill-road.jpg",
      alt: "Exterior of 3401 Bunker Hill Road. This is the building, not an interior photo of Unit 3.",
      summary: "Studio in Mount Rainier, $1,000 a month, available now.",
      story: [
        "Unit 3 is a studio apartment at 3401 Bunker Hill Road in Mount Rainier, available now at $1,000 a month.",
        "The apartment includes off-street parking. There is no laundry in the building, and smoking is not permitted.",
        "The building is in Mount Rainier’s Gateway Arts District, near Joe’s Movement Emporium and a short trip from Washington. The photograph shows the building."
      ]
    },
    {
      id: "3401-bunker-hill-road-unit-8",
      name: "3401 Bunker Hill Road, Unit 8",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3401 Bunker Hill Road",
      unit: "Unit 8",
      role: "Owned",
      beds: "1",
      available: "Now",
      open: true,
      price: "$1,200/month",
      image: "images/3401-bunker-hill-road.jpg",
      alt: "Exterior of 3401 Bunker Hill Road. This is the building, not an interior photo of Unit 8.",
      summary: "One-bedroom in Mount Rainier, $1,200 a month, available now.",
      story: [
        "Unit 8 is a one-bedroom apartment at 3401 Bunker Hill Road in Mount Rainier, available now at $1,200 a month.",
        "The apartment includes off-street parking. There is no laundry in the building, and smoking is not permitted.",
        "The building is in Mount Rainier’s Gateway Arts District, near Joe’s Movement Emporium and a short trip from Washington. The photograph shows the building."
      ]
    },
    {
      id: "3401-bunker-hill-road-unit-101",
      name: "3401 Bunker Hill Road, Unit 101",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3401 Bunker Hill Road",
      unit: "Unit 101",
      role: "Owned",
      summary: "Residence at 3401 Bunker Hill Road in Mount Rainier.",
      story: [
        "Unit 101 is a residence at 3401 Bunker Hill Road in Mount Rainier, in the Gateway Arts District."
      ]
    },
    {
      id: "3403-bunker-hill-road-live-work",
      name: "3403 Bunker Hill Road, Live/work",
      intent: "rent",
      type: "Mixed-use",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3403 Bunker Hill Road",
      role: "Owned",
      unitUnspecified: true,
      available: "Now",
      open: true,
      price: "$2,000/month",
      summary: "Live/work space at 3403 Bunker Hill Road, posted at $2,000 a month.",
      story: [
        "3403 Bunker Hill Road in Mount Rainier is a live/work apartment, available now. The posted rent is $2,000 a month.",
        "A tenant can complete renovation work in exchange for a rent credit. The scope, the credit, the timeline, and the lease are agreed in writing. Live/work use depends on the approvals that apply.",
        "There is no laundry in the building, and parking is on the street."
      ]
    },
    {
      id: "3403-bunker-hill-road",
      name: "3403 Bunker Hill Road",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3403 Bunker Hill Road",
      role: "Owned",
      unitUnspecified: true,
      beds: "1",
      baths: "1",
      available: "Now",
      open: true,
      price: "$1,350/month",
      summary: "Renovated one-bedroom at 3403 Bunker Hill Road, $1,350 a month plus utilities.",
      story: [
        "This is a renovated one-bedroom, one-bathroom apartment at 3403 Bunker Hill Road in Mount Rainier. Rent is $1,350 a month, plus utilities, and it is available now.",
        "Laundry is in the building, parking is on the street, and smoking is not permitted.",
        "The apartment is in Mount Rainier’s Gateway Arts District, near Joe’s Movement Emporium."
      ]
    },
    {
      id: "3817-34th-street",
      name: "3817 34th Street",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3817 34th Street",
      role: "Owned",
      summary: "Home at 3817 34th Street in Mount Rainier.",
      story: [
        "3817 34th Street is a home in Mount Rainier. Apt 1 and Storefront A are listed separately."
      ]
    },
    {
      id: "3817-34th-street-apt-1",
      name: "3817 34th Street, Apt 1",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3817 34th Street",
      unit: "Apt 1",
      role: "Owned",
      summary: "Apartment at 3817 34th Street in Mount Rainier.",
      story: [
        "Apt 1 is a residence at 3817 34th Street in Mount Rainier."
      ]
    },
    {
      id: "3817-34th-street-storefront-a",
      name: "3817 34th Street, Storefront A",
      intent: "rent",
      type: "Retail",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3817 34th Street",
      unit: "Storefront A",
      role: "Owned",
      summary: "Retail space at 3817 34th Street in Mount Rainier.",
      story: [
        "Storefront A is retail space at 3817 34th Street in Mount Rainier."
      ]
    },
    {
      id: "3830-34th-street",
      name: "3830 34th Street",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3830 34th Street",
      role: "Owned",
      summary: "Home at 3830 34th Street in Mount Rainier.",
      story: [
        "3830 34th Street is a home in Mount Rainier."
      ]
    },
    {
      id: "3837-34th-street-unit-2",
      name: "3837 34th Street, Unit 2",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3837 34th Street",
      unit: "Unit 2",
      role: "Owned",
      summary: "Residence at 3837 34th Street in Mount Rainier.",
      story: [
        "Unit 2 is a residence at 3837 34th Street in Mount Rainier."
      ]
    },
    {
      id: "3837-34th-street-unit-3",
      name: "3837 34th Street, Unit 3",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3837 34th Street",
      unit: "Unit 3",
      role: "Owned",
      summary: "Residence at 3837 34th Street in Mount Rainier.",
      story: [
        "Unit 3 is a residence at 3837 34th Street in Mount Rainier."
      ]
    },
    {
      id: "3840-34th-street",
      name: "3840 34th Street",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3840 34th Street",
      role: "Owned",
      summary: "Home at 3840 34th Street in Mount Rainier.",
      story: [
        "3840 34th Street is a home in Mount Rainier."
      ]
    },
    {
      id: "3850-34th-street-commercial",
      name: "3850 34th Street, Commercial",
      intent: "rent",
      type: "Commercial",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3850 34th Street",
      role: "Owned",
      summary: "Commercial space at 3850 34th Street in Mount Rainier.",
      story: [
        "3850 34th Street in Mount Rainier is offered as commercial space."
      ]
    },
    {
      id: "3850-34th-street",
      name: "3850 34th Street",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Mount Rainier",
      street: "3850 34th Street",
      role: "Owned",
      summary: "Home at 3850 34th Street in Mount Rainier.",
      story: [
        "3850 34th Street is a home in Mount Rainier."
      ]
    },
    {
      id: "4312-hamilton-street",
      name: "4312 Hamilton Street",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4312 Hamilton Street",
      role: "Owned",
      summary: "Home at 4312 Hamilton Street in Hyattsville.",
      story: [
        "4312 Hamilton Street is a home in Hyattsville, offered for lease."
      ]
    },
    {
      id: "4314-hamilton-street",
      name: "4314 Hamilton Street",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4314 Hamilton Street",
      role: "Owned",
      summary: "Home at 4314 Hamilton Street in Hyattsville.",
      story: [
        "4314 Hamilton Street is a home in Hyattsville, offered for lease."
      ]
    },
    {
      id: "4318-hamilton-street-unit-8",
      name: "4318 Hamilton Street, Unit 8",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 8",
      role: "Owned",
      summary: "Unit 8 at 4318 Hamilton Street in Hyattsville.",
      story: [
        "Unit 8 is a residence at 4318 Hamilton Street in Hyattsville."
      ]
    },
    {
      id: "4318-hamilton-street-unit-10",
      name: "4318 Hamilton Street, Unit 10",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 10",
      role: "Owned",
      summary: "Unit 10 at 4318 Hamilton Street in Hyattsville.",
      story: [
        "Unit 10 is a residence at 4318 Hamilton Street in Hyattsville."
      ]
    },
    {
      id: "4318-hamilton-street-unit-14-16-17",
      name: "4318 Hamilton Street, Unit 14/16/17",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 14/16/17",
      role: "Owned",
      summary: "Unit 14/16/17 at 4318 Hamilton Street in Hyattsville.",
      story: [
        "Unit 14/16/17 is a residence at 4318 Hamilton Street in Hyattsville."
      ]
    },
    {
      id: "4318-hamilton-street-unit-103-105",
      name: "4318 Hamilton Street, Unit 103/105",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 103/105",
      role: "Owned",
      summary: "Unit 103/105 at 4318 Hamilton Street in Hyattsville.",
      story: [
        "Unit 103/105 is a residence at 4318 Hamilton Street in Hyattsville."
      ]
    },
    {
      id: "4318-hamilton-street-unit-106",
      name: "4318 Hamilton Street, Unit 106",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 106",
      role: "Owned",
      summary: "Unit 106 at 4318 Hamilton Street in Hyattsville.",
      story: [
        "Unit 106 is a residence at 4318 Hamilton Street in Hyattsville."
      ]
    },
    {
      id: "4318-hamilton-street-unit-107",
      name: "4318 Hamilton Street, Unit 107",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 107",
      role: "Owned",
      summary: "Unit 107 at 4318 Hamilton Street in Hyattsville.",
      story: [
        "Unit 107 is a residence at 4318 Hamilton Street in Hyattsville."
      ]
    },
    {
      id: "4318-hamilton-street-unit-108",
      name: "4318 Hamilton Street, Unit 108",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 108",
      role: "Owned",
      summary: "Unit 108 at 4318 Hamilton Street in Hyattsville.",
      story: [
        "Unit 108 is a residence at 4318 Hamilton Street in Hyattsville."
      ]
    },
    {
      id: "4318-hamilton-street-unit-110",
      name: "4318 Hamilton Street, Unit 110",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 110",
      role: "Owned",
      summary: "Unit 110 at 4318 Hamilton Street in Hyattsville.",
      story: [
        "Unit 110 is a residence at 4318 Hamilton Street in Hyattsville."
      ]
    },
    {
      id: "4318-hamilton-street-unit-200",
      name: "4318 Hamilton Street, Unit 200",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 200",
      role: "Owned",
      summary: "Unit 200 at 4318 Hamilton Street in Hyattsville.",
      story: [
        "Unit 200 is a residence at 4318 Hamilton Street in Hyattsville."
      ]
    },
    {
      id: "4318-hamilton-street-unit-203-205",
      name: "4318 Hamilton Street, Unit 203/205",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 203/205",
      role: "Owned",
      summary: "Unit 203/205 at 4318 Hamilton Street in Hyattsville.",
      story: [
        "Unit 203/205 is a residence at 4318 Hamilton Street in Hyattsville."
      ]
    },
    {
      id: "4318-hamilton-street-unit-206",
      name: "4318 Hamilton Street, Unit 206",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 206",
      role: "Owned",
      summary: "Unit 206 at 4318 Hamilton Street in Hyattsville.",
      story: [
        "Unit 206 is a residence at 4318 Hamilton Street in Hyattsville."
      ]
    },
    {
      id: "4318-hamilton-street-unit-207",
      name: "4318 Hamilton Street, Unit 207",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 207",
      role: "Owned",
      summary: "Unit 207 at 4318 Hamilton Street in Hyattsville.",
      story: [
        "Unit 207 is a residence at 4318 Hamilton Street in Hyattsville."
      ]
    },
    {
      id: "4318-hamilton-street-unit-210",
      name: "4318 Hamilton Street, Unit 210",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Hyattsville",
      street: "4318 Hamilton Street",
      unit: "Unit 210",
      role: "Owned",
      summary: "Unit 210 at 4318 Hamilton Street in Hyattsville.",
      story: [
        "Unit 210 is a residence at 4318 Hamilton Street in Hyattsville."
      ]
    },
    {
      id: "7930-7932-georgia-avenue-barber-booth",
      name: "7930-7932 Georgia Avenue, Barber booth",
      intent: "rent",
      type: "Retail",
      state: "Maryland",
      neighborhood: "Silver Spring",
      street: "7930-7932 Georgia Avenue",
      unit: "Barber booth",
      role: "Owned",
      summary: "Barber booth on Georgia Avenue in Silver Spring.",
      story: [
        "This barber booth is a workspace for rent at 7930-7932 Georgia Avenue in Silver Spring."
      ]
    },
    {
      id: "7930-7932-georgia-avenue-booth-1",
      name: "7930-7932 Georgia Avenue, Booth 1",
      intent: "rent",
      type: "Retail",
      state: "Maryland",
      neighborhood: "Silver Spring",
      street: "7930-7932 Georgia Avenue",
      unit: "Booth 1",
      role: "Owned",
      summary: "Booth 1 on Georgia Avenue in Silver Spring.",
      story: [
        "Booth 1 is a barber booth for rent at 7930-7932 Georgia Avenue in Silver Spring."
      ]
    },
    {
      id: "7930-7932-georgia-avenue-booth-2",
      name: "7930-7932 Georgia Avenue, Booth 2",
      intent: "rent",
      type: "Retail",
      state: "Maryland",
      neighborhood: "Silver Spring",
      street: "7930-7932 Georgia Avenue",
      unit: "Booth 2",
      role: "Owned",
      summary: "Booth 2 on Georgia Avenue in Silver Spring.",
      story: [
        "Booth 2 is a barber booth for rent at 7930-7932 Georgia Avenue in Silver Spring."
      ]
    },
    {
      id: "7930-7932-georgia-avenue-booth-3",
      name: "7930-7932 Georgia Avenue, Booth 3",
      intent: "rent",
      type: "Retail",
      state: "Maryland",
      neighborhood: "Silver Spring",
      street: "7930-7932 Georgia Avenue",
      unit: "Booth 3",
      role: "Owned",
      summary: "Booth 3 on Georgia Avenue in Silver Spring.",
      story: [
        "Booth 3 is a barber booth for rent at 7930-7932 Georgia Avenue in Silver Spring."
      ]
    },
    {
      id: "7930-7932-georgia-avenue-booth-4",
      name: "7930-7932 Georgia Avenue, Booth 4",
      intent: "rent",
      type: "Retail",
      state: "Maryland",
      neighborhood: "Silver Spring",
      street: "7930-7932 Georgia Avenue",
      unit: "Booth 4",
      role: "Owned",
      summary: "Booth 4 on Georgia Avenue in Silver Spring.",
      story: [
        "Booth 4 is a barber booth for rent at 7930-7932 Georgia Avenue in Silver Spring."
      ]
    },
    {
      id: "7930-7932-georgia-avenue-booth-5",
      name: "7930-7932 Georgia Avenue, Booth 5",
      intent: "rent",
      type: "Retail",
      state: "Maryland",
      neighborhood: "Silver Spring",
      street: "7930-7932 Georgia Avenue",
      unit: "Booth 5",
      role: "Owned",
      summary: "Booth 5 on Georgia Avenue in Silver Spring.",
      story: [
        "Booth 5 is a barber booth for rent at 7930-7932 Georgia Avenue in Silver Spring."
      ]
    },
    {
      id: "7930-7932-georgia-avenue-booth-6",
      name: "7930-7932 Georgia Avenue, Booth 6",
      intent: "rent",
      type: "Retail",
      state: "Maryland",
      neighborhood: "Silver Spring",
      street: "7930-7932 Georgia Avenue",
      unit: "Booth 6",
      role: "Owned",
      summary: "Booth 6 on Georgia Avenue in Silver Spring.",
      story: [
        "Booth 6 is a barber booth for rent at 7930-7932 Georgia Avenue in Silver Spring."
      ]
    },
    {
      id: "7930-7932-georgia-avenue-unit-105",
      name: "7930-7932 Georgia Avenue, Unit 105",
      intent: "rent",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Silver Spring",
      street: "7930-7932 Georgia Avenue",
      unit: "Unit 105",
      role: "Owned",
      summary: "Residence at 7930-7932 Georgia Avenue in Silver Spring.",
      story: [
        "Unit 105 is a residence at 7930-7932 Georgia Avenue in Silver Spring."
      ]
    },
    {
      id: "4719-stamp-road",
      name: "4719 Stamp Road",
      intent: "owned",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Temple Hills",
      street: "4719 Stamp Road",
      role: "Owned",
      summary: "Owned home at 4719 Stamp Road in Temple Hills.",
      story: [
        "4719 Stamp Road in Temple Hills is part of the portfolio. It is not offered for rent or for sale."
      ]
    },
    {
      id: "950-sligo-avenue",
      name: "950 Sligo Avenue",
      intent: "sale",
      type: "Residential",
      state: "Maryland",
      neighborhood: "Silver Spring",
      street: "950 Sligo Avenue",
      role: "Owned",
      summary: "950 Sligo Avenue in Silver Spring, for sale.",
      story: [
        "950 Sligo Avenue in Silver Spring is for sale."
      ]
    }
  ]
};
