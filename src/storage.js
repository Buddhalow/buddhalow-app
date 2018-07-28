class Storage {
    getItem(key) {
        return new Promise((resolve, fail) => {
            resolve(localStorage.getItem(key))
        })
    }
    setItem(key, value) {
        return new Promise((resolve, fail) => {
            resolve(localStorage.setItem(key, value))
        })
    }
}

export let AsyncStorage = new Storage()