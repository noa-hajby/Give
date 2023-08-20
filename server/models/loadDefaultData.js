const volunteeringsModel = require('../models/volunteeringsModel');
const mongoose = require('mongoose');
const kindVolunteeringModel= require('../models/kindVolunteeringsModel')

const kindVolunteeringData = [
    {
        titel: "St. Joseph's Hospital",
        minAge: 20,
        img: '',
        detail: "We are seeking compassionate and responsible individuals to join our team and provide exceptional patient care. Volunteers will be responsible for tasks such as feeding patients, providing emotional support, and assisting with basic medical procedures. No medical experience is required, but volunteers must be willing to undergo training and pass a background check.",
    },
    {
        titel: "Big Brothers Big Sisters",
        minAge: 20,
        img: '',
        detail: "We are looking for responsible adults to serve as mentors to children in need. Volunteers will be matched with a child and will be responsible for spending time with them on a regular basis, providing guidance and support, and acting as a positive role model. This is a great opportunity for anyone who wants to make a positive impact in a child's life.",
    },
    {
        titel: "Red Cross",
        minAge: 20,
        img: '',
        detail: "We are seeking volunteers to assist with disaster relief efforts in the wake of natural disasters such as hurricanes, floods, and wildfires. Volunteers will be responsible for tasks such as setting up and managing shelters, distributing supplies, and providing emotional support to victims. This is a great opportunity for anyone who wants to make a difference in their community during times of crisis.",
    },
    {
        titel: "Habitat for Humanity",
        minAge: 20,
        img: '',
        detail: "We are seeking volunteers to help build homes for families in need. Volunteers will be responsible for tasks such as framing, roofing, painting, and landscaping. No experience is required, but volunteers must be willing to learn and work as part of a team. This is a great opportunity for anyone who wants to learn new skills and make a positive impact in their community.",
    },
    {
        titel: "Seti Hospital",
        minAge: 20,
        img: '',
        detail: "We need volunteers to help with tasks such as feeding patients and providing emotional support. Volunteers will be required to undergo a background check and complete training. Shifts are available on weekdays and weekends.",   
    },
    {
        titel: "Big Brothers Big Sisters",
        minAge: 20,
        img: '',
        detail: "We are seeking volunteers to serve as mentors for children in our program. Mentors will be required to commit to spending at least 4 hours per month with their mentee for a minimum of 1 year. Training and support will be provided.",
    },
    {
        titel: "Local Food Bank",
        minAge: 20,
        img: '',
        detail: "We need volunteers to help with sorting, packing, and distributing food to our clients. Volunteers will be required to stand for long periods of time and lift up to 50 pounds. Shifts are available Monday through Friday.",
    },
    {
        titel: "American Red Cross",
        minAge: 20,
        img: '',
        detail: "We need volunteers to assist with disaster response efforts, including setting up shelters and providing assistance to those affected by disasters. Volunteers will need to complete training and be available on short notice.",
    },
    {
        titel: "Habitat for Humanity",
        minAge: 20,
        img: '',
        detail: "We need volunteers to assist with building and renovating homes for families in need. Volunteers will be required to use tools and equipment and perform physical labor. No experience is necessary, but volunteers should be comfortable working outdoors.",
    }          
];

const volunteersData = [
    {
        name: "St. Joseph's Hospital",
        phoneConnect: "555-123-4567",
        volunteering: "Assisting with patient care",
        cityvolunteering: "Los Angeles",
        detail: "We are seeking compassionate and responsible individuals to join our team and provide exceptional patient care. Volunteers will be responsible for tasks such as feeding patients, providing emotional support, and assisting with basic medical procedures. No medical experience is required, but volunteers must be willing to undergo training and pass a background check.",
        kindVolunteering: "518dd29342ea55f7d8e2e3c5", // An ID referencing a kindVolunteerings document
        numDayOfWeek: 2,
        dayOfWeekFevorite: 4,
        duringTime: 4,
        isRemoval: false
    },
    {
        name: "Big Brothers Big Sisters",
        phoneConnect: "555-987-6543",
        volunteering: "Mentoring youth",
        cityvolunteering: "Chicago",
        detail: "We are looking for responsible adults to serve as mentors to children in need. Volunteers will be matched with a child and will be responsible for spending time with them on a regular basis, providing guidance and support, and acting as a positive role model. This is a great opportunity for anyone who wants to make a positive impact in a child's life.",
        kindVolunteering: "518dd29342ea55f7d8e2e3c5", // An ID referencing a kindVolunteerings document
        numDayOfWeek: 1,
        dayOfWeekFevorite: 2,
        duringTime: 2,
        isRemoval: false
    },
    {
        name: "Red Cross",
        phoneConnect: "555-555-5555",
        volunteering: "Disaster relief",
        cityvolunteering: "New York City",
        detail: "We are seeking volunteers to assist with disaster relief efforts in the wake of natural disasters such as hurricanes, floods, and wildfires. Volunteers will be responsible for tasks such as setting up and managing shelters, distributing supplies, and providing emotional support to victims. This is a great opportunity for anyone who wants to make a difference in their community during times of crisis.",
        kindVolunteering: "518dd29342ea55f7d8e2e3c5", // An ID referencing a kindVolunteerings document
        numDayOfWeek: 3,
        dayOfWeekFevorite: 6,
        duringTime: 6,
        isRemoval: false
    },
    {
        name: "Habitat for Humanity",
        phoneConnect: "555-466-4567",
        volunteering: "Building homes",
        cityvolunteering: "Atlanta",
        detail: "We are seeking volunteers to help build homes for families in need. Volunteers will be responsible for tasks such as framing, roofing, painting, and landscaping. No experience is required, but volunteers must be willing to learn and work as part of a team. This is a great opportunity for anyone who wants to learn new skills and make a positive impact in their community.",
        kindVolunteering: "518dd29342ea55f7d8e2e3c5", // An ID referencing a kindVolunteerings document
        numDayOfWeek: 2,
        dayOfWeekFevorite: 3,
        duringTime: 5,
        isRemoval: false
    },
    {
        name: "Seti Hospital",
        phoneConnect: "555-908-4567",
        volunteering: "Assisting with patient care",
        cityvolunteering: "Los Angeles",
        detail: "We need volunteers to help with tasks such as feeding patients and providing emotional support. Volunteers will be required to undergo a background check and complete training. Shifts are available on weekdays and weekends.",
        kindVolunteering: "518dd29342ea55f7d8e2e3c5", // An ID referencing a kindVolunteerings document
        numDayOfWeek: 2,
        dayOfWeekFevorite: 4,
        duringTime: 4,
        isRemoval: false
    },
    {
        name: "Big Brothers Big Sisters",
        phoneConnect: "555-987-6543",
        volunteering: "Mentoring youth",
        cityvolunteering: "New York City",
        detail: "We are seeking volunteers to serve as mentors for children in our program. Mentors will be required to commit to spending at least 4 hours per month with their mentee for a minimum of 1 year. Training and support will be provided.",
        kindVolunteering: "518dd29342ea55f7d8e2e3c6", // An ID referencing a kindVolunteerings document
        numDayOfWeek: 1,
        dayOfWeekFevorite: 3,
        duringTime: 2,
        isRemoval: false
    },
    {
        name: "Local Food Bank",
        phoneConnect: "555-555-1212",
        volunteering: "Packing and distributing food",
        cityvolunteering: "Chicago",
        detail: "We need volunteers to help with sorting, packing, and distributing food to our clients. Volunteers will be required to stand for long periods of time and lift up to 50 pounds. Shifts are available Monday through Friday.",
        kindVolunteering: "518dd29342ea55f7d8e2e3c7", // An ID referencing a kindVolunteerings document
        numDayOfWeek: 5,
        dayOfWeekFevorite: 2,
        duringTime: 6,
        isRemoval: false
    },
    {
        name: "American Red Cross",
        phoneConnect: "555-111-2222",
        volunteering: "Disaster response",
        cityvolunteering: "Houston",
        detail: "We need volunteers to assist with disaster response efforts, including setting up shelters and providing assistance to those affected by disasters. Volunteers will need to complete training and be available on short notice.",
        kindVolunteering: "518dd29342ea55f7d8e2e3c8", // An ID referencing a kindVolunteerings document
        numDayOfWeek: 3,
        dayOfWeekFevorite: 4,
        duringTime: 3,
        isRemoval: false
    },
    {
        name: "Habitat for Humanity",
        phoneConnect: "555-444-3333",
        volunteering: "Construction",
        cityvolunteering: "Atlanta",
        detail: "We need volunteers to assist with building and renovating homes for families in need. Volunteers will be required to use tools and equipment and perform physical labor. No experience is necessary, but volunteers should be comfortable working outdoors.",
        kindVolunteering: "518dd29342ea55f7d8e2e3c8", // An ID referencing a kindVolunteerings document
        numDayOfWeek: 3,
        dayOfWeekFevorite: 4,
        duringTime: 3,
        isRemoval: false
    }          
];

const volteersHospitalData = [
    {
      name: "Red Cross",
      phoneConnect: "555-1234",
      volunteering: "Hospital volunteer",
      cityvolunteering: "New York",
      detail: "We are looking for volunteers to assist with patient care and other tasks at local hospitals.",
      kindVolunteering: mongoose.Types.ObjectId("644900a46ed07e02e8e2ad50"),
      numDayOfWeek: 2,
      dayOfWeekFevorite: 4,
      duringTime: 3,
      isRemoval: false
    },
    {
      name: "American Cancer Society",
      phoneConnect: "555-5678",
      volunteering: "Volunteer at hospital",
      cityvolunteering: "Los Angeles",
      detail: "We are seeking volunteers to provide support and comfort to cancer patients in hospitals.",
      kindVolunteering: mongoose.Types.ObjectId("644900a46ed07e02e8e2ad50"),
      numDayOfWeek: 3,
      dayOfWeekFevorite: 2,
      duringTime: 2,
      isRemoval: false
    },
    {
      name: "Children's Hospital",
      phoneConnect: "555-9876",
      volunteering: "Hospital volunteer",
      cityvolunteering: "Chicago",
      detail: "We are in need of volunteers to help with various tasks such as play therapy and patient transport at our children's hospital.",
      kindVolunteering: mongoose.Types.ObjectId("644900a46ed07e02e8e2ad50"),
      numDayOfWeek: 1,
      dayOfWeekFevorite: 1,
      duringTime: 4,
      isRemoval: false
    },
    {
      name: "Volunteers of America",
      phoneConnect: "555-2468",
      volunteering: "Hospital volunteer",
      cityvolunteering: "Houston",
      detail: "We are seeking compassionate volunteers to assist with patient care and other tasks at local hospitals.",
      kindVolunteering: mongoose.Types.ObjectId("644900a46ed07e02e8e2ad50"),
      numDayOfWeek: 2,
      dayOfWeekFevorite: 3,
      duringTime: 3,
      isRemoval: false
    },
    {
      name: "St. Jude Children's Research Hospital",
      phoneConnect: "555-1357",
      volunteering: "Volunteer at hospital",
      cityvolunteering: "San Francisco",
      detail: "We are in need of volunteers to assist with patient care and other tasks at our research hospital that focuses on childhood diseases.",
      kindVolunteering: mongoose.Types.ObjectId("644900a46ed07e02e8e2ad50"),
      numDayOfWeek: 2,
      dayOfWeekFevorite: 3,
      duringTime: 2,
      isRemoval: false
    },
    {
      name: "Ronald McDonald House Charities",
      phoneConnect: "555-2468",
      volunteering: "Hospital volunteer",
      cityvolunteering: "Houston",
      detail: "We are seeking volunteers to provide comfort and support to families of hospitalized children.",
      kindVolunteering: mongoose.Types.ObjectId("644900a46ed07e02e8e2ad50"),
      numDayOfWeek: 2,
      dayOfWeekFevorite: 3,
      duringTime: 3,
      isRemoval: false
    }
]
  

const loadDefaultData = () => {
    volunteeringsModel.collection.insertMany(volteersHospitalData, function(err,r) {
        console.log('err,r', err,r)
        });
    // kindVolunteeringModel.collection.insertMany([
    //     {
    //         titel: "Volunteer at hospital",
    //         minAge: 18,
    //         img: '',
    //         detail: "We are seeking volunteers to provide support and comfort to patients in hospitals.",
    //     },
    // ], function(err,r) {
    //     console.log('err,r', err,r)
    // });
}

module.exports = {
    loadDefaultData
}

    
