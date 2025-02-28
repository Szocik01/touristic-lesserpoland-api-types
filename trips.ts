export type FindRouteBody = {
  points: LatLngAlt[];
  profile: "car" | "bike" | "foot";
  elevation?: boolean;
  optimize?: boolean; //can change order of points if other order provides better route
};

export type FindRouteHintDTO = {
  id: number;
  name: string;
  type: "place" | "polygon";
  way: GeoJsonString;
};

export type SearchTripDTO = {
  pageCount: number;
  trips: TripDTO[];
};

export type FindRouteHintsDTO = FindRouteHintDTO[];

export type GraphHopperApiErrorResponse = {
  message: string;
  hints: {
    message: string;
  }[];
};

export type LatLngAlt = [number, number, number?];

export type LatLng = [number, number];

export type GraphHopperApiSuccessResponse = {
  distance: number;
  weight: number;
  time: number;
  transfers: number;
  points_encoded: boolean;
  bbox: number[];
  points: {
    type: string;
    coordinates: LatLngAlt[];
  };
  ascend: number;
  descend: number;
  details: {
    leg_time: [number, number, number][];
    leg_distance: [number, number, number][];
  };
};

export type TripTypes = "car" | "bike" | "foot";

export type Point = {
  osmPointId?: number;
  coordinates?: LatLngAlt;
  order: number;
};

export type AddTripBody = {
  route: GeoJsonLineString;
  color: string;
  isPublic: boolean;
  type: TripTypes;
  name: string;
  description: string;
  ascend: number;
  descend: number;
  distance: number;
  time: number;
  points: string; //JSON stringified array of Point[]
};

export type GeoJsonString = string;

export type PlaceHintDTO = {
  id: number;
  name: string;
  city: string;
  point: GeoJsonString;
};

export type PlaceHintParsed = {
  id: number;
  name: string;
  city: string;
  point: GeoJsonPoint;
};

export type PlaceHintResponse = PlaceHintDTO[];

export type TripImageDTO = {
  id: number;
  name: string;
  path: string;
};

export type TripCommentDTO = {
  id: string;
  tripId: string;
  userId: string;
  userName: string;
  content: string;
  dateAdd: string;
};

export type TripPointDTO = {
  id: number;
  name?: string;
  osmPointId?: number;
  tripId: string;
  coordinates: string;
  order: number;
};

export type TripDTO = {
  id: string;
  route: string;
  color: string;
  public: boolean;
  type: TripTypes;
  name: string;
  description: string;
  ascend: number;
  descend: number;
  distance: number;
  time: number;
  tripOwnerId: string;
  isUsersFavourite: boolean;
  isUserOwner: boolean;
  images: TripImageDTO[];
  comments: TripCommentDTO[];
  points: TripPointDTO[];
};

export type ParsedTripPoints = {
  id: number;
  name?: string;
  osmPointId?: number;
  tripId: string;
  coordinates: GeoJsonPoint;
  order: number;
}[];

export type ParsedTrip = {
  id: string;
  route: GeoJsonLineString;
  color: string;
  public: boolean;
  type: TripTypes;
  name: string;
  description: string;
  ascend: number;
  descend: number;
  distance: number;
  time: number;
  tripOwnerId: string;
  isUserOwner: boolean;
  isUsersFavourite: boolean;
  images: TripImageDTO[];
  comments: TripCommentDTO[];
  points: ParsedTripPoints;
};

export type EditTripBody = {
  id: string;
  color: string;
  isPublic: boolean;
  name: string;
  description: string;
  deletedImagesIds: number[];
};

export type AddTripCommentBody = {
  tripId: string;
  content: string;
};

export type EditTripCommentBody = {
  commentId: string;
  content: string;
};

export type GeoJsonPoint = {
  type: "Point";
  coordinates: LatLngAlt;
};

export type GeoJsonLineString = {
  type: "LineString";
  coordinates: LatLngAlt[];
};

export type GeoJsonPolygon = {
  type: "Polygon";
  coordinates: LatLngAlt[][];
};

export type GeoJsonFeature = {
  type: "Feature";
  geometry: GeoJsonPoint | GeoJsonLineString | GeoJsonPolygon;
  properties: { [key: string]: any };
};

export type GeoJsonFeatureCollection= {
  type: "FeatureCollection";
  features: GeoJsonFeature[];
};

export type ParsedFindRouteHint = {
  id: number;
  name: string;
  type: "place" | "polygon";
  way: GeoJsonPoint | GeoJsonPolygon;
}

export type ToggleFavouriteTripResponse = {
  tripId: string;
  isAdded: boolean;
}
