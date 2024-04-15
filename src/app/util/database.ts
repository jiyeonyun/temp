import { MongoClient } from "mongodb";

declare const global: {
    _mongo?: any; // 예시로 사용한 속성명과 타입을 실제 사용되는 것으로 대체하세요
};
const url: string = "mongodb+srv://jiyeonyun43:wldus5524@cluster0.upeanlo.mongodb.net/?retryWrites=true&w=majority";
const options: any = { useNewUrlParser: true }; // or specify the options type more accurately if possible
let connectDB: any; // or specify the MongoClient type if possible

if (process.env.NODE_ENV === "development") {
    if (!global._mongo) {
        global._mongo = new MongoClient(url, options).connect();
    }
    connectDB = global._mongo;
} else {
    connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
