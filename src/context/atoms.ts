import { RecoilState, atom } from "recoil";


type Reference = {
    [key:string]: RecoilState<any>
};

const ref:Reference = {};

export const createAtom = (key:string, defaultValue:any) => {
    if (!ref.hasOwnProperty(key)) {
        ref[key] = atom({
            key: key,
            default: defaultValue
        });
    }
    return ref[key];
}