import Attraction from "../Interfaces/Attraction";

type RootStackParamList = {
    Home: undefined;
    AttractionDetails: { item: Attraction };
    Gallery: { images: string[] };
    Map: { item: Attraction };
};

export default RootStackParamList;