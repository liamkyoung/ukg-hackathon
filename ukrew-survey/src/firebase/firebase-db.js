import { firebaseApp } from './firebase-config';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

const db = getFirestore(firebaseApp);
const usersCollectionRef = collection(db, 'users');

// ========================================================
// creates a user inside of Firestore based on user inputs
// ========================================================
const createUser = async (
  userEmail,
  userName,
  jobTitle,
  team,
  contactPlatform,
  contactAddress,
  university,
  pets,
  favInterest,
  otherInterests,
  message,
  emoji
) => {
  await addDoc(usersCollectionRef, {
    userEmail: userEmail,
    userName: userName,
    jobTitle: jobTitle,
    team: team,
    contactPlatform: contactPlatform,
    contactAddress: contactAddress,
    university: university,
    pets: pets,
    favInterest: favInterest,
    otherInterests: otherInterests,
    message: message,
    emoji: emoji,
  });
};

// ========================================================
// returns true of the userEmail already has a document
// tied to it in Firestore and false otherwise
// ========================================================
const userAlreadyExists = async (userEmail) => {
  const q = query(usersCollectionRef, where('userEmail', '==', userEmail));
  const res = await getDocs(q);

  console.log(res.size === 0 ? false : true);

  return res.size === 0 ? false : true;
}

// ========================================================
// fetches all users from Firestore and computes their
// ranking score based on the current user's preferences
//
// each otherUser contains the school, interests, and pets
// in common with the currUser as well as the score
//
// returns an array sorted by score in descending order
// ========================================================
const computeRankings = async (userEmail) => {
  // ranking weights
  const universityWeight = 5;
  const petsWeight = 3;
  const favInterestWeight = 10;
  const otherInterestsWeight = 3;

  // fetching data from Firebase
  const qUser = query(usersCollectionRef, where('userEmail', '==', userEmail));
  const qNotUser = query(usersCollectionRef, where('userEmail', '!=', userEmail));
  let currUserRes, otherUsersRes;
  try {
    currUserRes = await getDocs(qUser);
    otherUsersRes = await getDocs(qNotUser);
  }
  catch (error) {
    console.error(error.message);
    return [];
  }

  if (currUserRes.size === 0)
    return [];
  
  const currUser = currUserRes.docs[0].data();
  const otherUsers = otherUsersRes.docs.map((doc) => doc.data());

  // logging current user's interests
  const currUserOtherInterestsSet = new Set();
  currUser.otherInterests.forEach((interest) => {
    currUserOtherInterestsSet.add(interest.toLowerCase());
  });

  // logging current user's pets
  const currUserPetsSet = new Set();
  currUser.pets.forEach((pet) => {
    currUserPetsSet.add(pet.toLowerCase());
  });

  // calculating each other users' score relative to current user
  let rankedUsersList = [];
  otherUsers.forEach((otherUser) => {
    const sameUniversity = currUser.university === otherUser.university ? true : false;
    let sameInterests = [];
    let samePets = [];
    let score = 0;

    // university score
    if (sameUniversity) score += universityWeight;

    // pets score
    otherUser.pets.forEach((pet) => {
      if (currUserPetsSet.has(pet.toLowerCase())) {
        score += petsWeight;
        samePets.push(pet);
      }
    });

    // favorite interest score
    if (currUser.favInterest.toLowerCase() === otherUser.favInterest.toLowerCase()) {
      score += favInterestWeight;
      sameInterests.push(currUser.favInterest);
    } else {
      otherUser.otherInterests.forEach((otherInterest) => {
        if (
          currUser.favInterest.toLowerCase() === otherInterest.toLowerCase()
        ) {
          score += favInterestWeight;
          sameInterests.push(currUser.favInterest);
        }
      });
    }

    // other interest score
    if (currUserOtherInterestsSet.has(otherUser.favInterest.toLowerCase())) {
      score += otherInterestsWeight;
      sameInterests.push(otherUser.favInterest);
    }

    otherUser.otherInterests.forEach((otherInterest) => {
      if (currUserOtherInterestsSet.has(otherInterest.toLowerCase())) {
        score += otherInterestsWeight;
        sameInterests.push(otherInterest);
      }
    });

    // appending score metrics to other user object
    const updatedUserObj = {
      ...otherUser,
      sameUniversity: sameUniversity,
      samePets: samePets,
      sameInterests: sameInterests,
      score: score,
    };

    rankedUsersList.push(updatedUserObj);
  });

  // sorting each user by score size (ranking)
  rankedUsersList.sort((a, b) => {
    return b.score - a.score;
  });

  console.log(rankedUsersList);

  return rankedUsersList;
};

export { createUser, userAlreadyExists, computeRankings };
