export function save(key, value) {
    localStorage.setItem(key, JSON.stringefy(value));
}

export function load(key) {
    try{
        const value = localStorage.getItem(key);
        if (typeof value !== "string"){
            return JSON.parse(value);
        }
        return value;
    } catch(err) {
        console.log(err);
        return null
    }
}

export function remove(key) {
    localStorage.removeItem(key);
}