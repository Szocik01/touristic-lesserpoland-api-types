
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
};

export type TripTypes = "car" | "bike" | "foot";

export type Point = {
  osmPointId?: number;
  coordinates?: LatLng;
  order: number;
}

export type AddTripBody = {
  route: GeoJsonLineString;
  color: string;
  isPublic: boolean;
  type: TripTypes;
  name: string;
  description: string;
  points: string; //JSON stringified array of Point[]
}

export type EditTripBody = {
  id: string;
  color: string;
  isPublic: boolean;
  name: string;
  description: string;
  deletedImagesIds: number[];
}

export type AddTripCommentBody = {
  tripId: string;
  content: string;
}

export type EditTripCommentBody = {
  commentId: string;
  content: string;
}

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
