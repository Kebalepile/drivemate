import {
  ROAD_RULES,
  ROAD_SURFACE_MARKINGS,
  WARNING_SIGNS,
  HEAVY_VEHICLE_CONTROLS,
  LIGHT_VEHICLE_CONTROLS,
} from "../context/Types";
import categories from "./questionCategories";

const dbName = "DriveMate",
  version = 1,
  storeNames = [
    ROAD_RULES,
    ROAD_SURFACE_MARKINGS,
    WARNING_SIGNS,
    HEAVY_VEHICLE_CONTROLS,
    LIGHT_VEHICLE_CONTROLS,
  ];

function openDB(dbName, version) {
  return window.indexedDB.open(dbName, version);
}
function initiObjectStore(db, storeNames) {
  storeNames.forEach((name) => {
    if (!db.objectStoreNames.contains(name)) {
      let storeObject = db.createObjectStore(name, {
        keyPath: "id",
        autoIncrement: true,
      });
      storeObject.createIndex("CTA", "category");
    }
  });
  addDataToStores();
}
async function populateStores(...category) {
  const dbRequest = openDB(dbName, version);
  try {
    const db = await new Promise((resolve, reject) => {
      dbRequest.onsuccess = (e) => resolve(e.target.result);
      dbRequest.onerror = (e) => reject(e.target.error);
    });
    storeNames.forEach((name) => {
      let transaction = db.transaction(name, "readwrite"),
        store = transaction.objectStore(name);
      for (let question of category) {
        switch (question.category) {
          case store.name:
            let req = store.add(question);
            req.onsuccess = () => {
              // console.log(`question added to ${name} store.`);
            };
            break;
          default:
            break;
        }
      }

      new Promise((resolve, reject) => {
        transaction.oncomplete = () => resolve(true);
        transaction.onerror = () =>
          reject("Error during Transaction ", transaction.error);
        transaction.onabort = () => {
          console.error(`transaction aborted ${transaction.error}`);
        };
      });
    });
  } catch (error) {
    console.error("Error populating indexedDB stores: ", error);
  }
}

async function addDataToStores() {
  const questionCategory = categories();
  try {
    storeNames.forEach((name) => {
      if (questionCategory.has(name)) {
        let category = questionCategory.get(name);
        category.forEach((question) => {
          populateStores(question);
          
        });
      }
    });
  } catch (error) {
    console.error(`Error fixing images: ${error}`);
  }
}
async function totalQuestions(storeName) {
  const dbRequest = openDB(dbName, version);
  try {
    const db = await new Promise((resolve, reject) => {
      dbRequest.onsuccess = (e) => resolve(e.target.result);
      dbRequest.onerror = (e) => reject(e.target.error);
    });
    const objectStore = db
      .transaction(storeName, "readonly")
      .objectStore(storeName);
    const request = await objectStore.count();
    const count = await new Promise((resolve, reject) => {
      request.onsuccess = (e) => resolve(e.target.result);
      request.onerror = (e) => reject(e.target.error);
    });

    return count;
  } catch (error) {
    console.error(error);
  }
}

async function getCategory(storeName, id = 1) {
  const dbRequest = openDB(dbName, version);

  try {
    const db = await new Promise((resolve, reject) => {
      dbRequest.onsuccess = (e) => resolve(e.target.result);
      dbRequest.onerror = (e) => reject(e.target.error);
    });

    const objectStore = db
      .transaction(storeName, "readonly")
      .objectStore(storeName);
    const request = objectStore.get(id);

    const result = await new Promise((resolve, reject) => {
      request.onsuccess = (e) => resolve(e.target.result);
      request.onerror = (e) => reject(e.target.error);
    });

    return result;
  } catch (error) {
    console.error(`Error getting Category from indexedDB ${error}`);
  }
}

function initDatabase() {
  const request = openDB(dbName, version);
  request.onblocked = () => alert("There's another connection to indexedDB!");
  request.onerror = (event) => {
    console.error(`Error while requesting IndexedBD: ${event.error}`);
  };

  request.onupgradeneeded = (event) => {
    const db = event.target.result;
    initiObjectStore(db, storeNames);
  };

  request.onsuccess = (event) => {
    const db = event.target.result;

    db.onversionchange = () => {
      db.close();
      alert("Database is outdated, please reload page.");
    };
    // handling database errors
    db.onerror = (e) => {
      console.error(`Database error: ${e.target.errorCode}`);
    };
  };
}
export { initDatabase, getCategory, totalQuestions };
