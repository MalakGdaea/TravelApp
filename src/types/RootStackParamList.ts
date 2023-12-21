import Attraction from "../Interfaces/Attraction";

type RootStackParamList = {
    Home: undefined;
    AttractionDetails: { item: Attraction };
    Gallery: { images: string[] };
};

export default RootStackParamList;