export type FindRouteBody = {
  points: LatLng[];
  profile: "car" | "bike" | "foot";
  elevation?: boolean;
  optimize?: boolean; //can change order of points if other order provides better route
};

export type GraphHopperApiErrorResponse = {
  message: string;
  hints: {
    message: string;
  }[];
};

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
    coordinates: LatLng[];
  };
  ascend: number;
  descend: number;
  details:{
    leg_time:[number,number,number][],
    leg_distance:[number,number,number][]
  }
};

export type TripTypes = "car" | "bike" | "foot";

export type Point = {
  osmPointId?: number;
  coordinates?: LatLng;
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
}

export type TripCommentDTO = {
  id: string;
  tripId: string;
  userId: string;
  content: string;
  dateAdd: string;
}

export type TripPointDTO = {
  id: number
  name?: string,
  osmPointId?: number,
  tripId: string,
  coordinates: string,
  order: number,
}

export type TripDTO = {
  id: string;
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
  tripOwnerId: string;
  images: TripImageDTO[];
  comments: TripCommentDTO[];
  points: TripPointDTO[];
}


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
  coordinates: LatLng;
};

export type GeoJsonLineString = {
  type: "LineString";
  coordinates: LatLng[];
};

export type GeoJsonPolygon = {
  type: "Polygon";
  coordinates: LatLng[][];
};
