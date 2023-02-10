export function save(key, value) {
    localStorage.setItem(key, JSON.stringefy(value));
}

export function load(key) {
    try{
        const value = localStorage.getItem(key);
        return JSON.parse(value);
    }catch {
    return null
    }
}

export function remove(key) {
    localStorage.removeItem(key);
}