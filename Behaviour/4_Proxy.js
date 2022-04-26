// With a Proxy patten, we get more control over the interactions with target object.
// A proxy object can determine the behavior that how external world can interact with object data

const person = {
    name: "John Doe",
    age: 42,
    nationality: "American"
};

export const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        console.log(`The value of ${prop} is ${obj[prop]}`);
    },
    set: (obj, prop, value) => {
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
        obj[prop] = value;
        return true;
    }
});