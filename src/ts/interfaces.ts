interface NavItem {
  id: number;
  path: string;
  text: string;
  icon: JSX.Element;
}

interface Data {
  postal_code?: string | null;
  country: string;
  country_iso_code: string;
  federal_district?: string | null;
  region_fias_id: string;
  region_kladr_id: string;
  region_iso_code: string;
  region_with_type: string;
  region_type: string;
  region_type_full: string;
  region: string;
  area_fias_id?: string | null;
  area_kladr_id?: string | null;
  area_with_type?: string | null;
  area_type?: string | null;
  area_type_full?: string | null;
  area?: string | null;
  city_fias_id?: string | null;
  city_kladr_id?: string | null;
  city_with_type?: string | null;
  city_type?: string | null;
  city_type_full?: string | null;
  city?: string | null;
  city_area?: string | null;
  city_district_fias_id?: string | null;
  city_district_kladr_id?: string | null;
  city_district_with_type?: string | null;
  city_district_type?: string | null;
  city_district_type_full?: string | null;
  city_district?: string | null;
  settlement_fias_id?: string | null;
  settlement_kladr_id?: string | null;
  settlement_with_type?: string | null;
  settlement_type?: string | null;
  settlement_type_full?: string | null;
  settlement?: string | null;
  street_fias_id?: string | null;
  street_kladr_id?: string | null;
  street_with_type?: string | null;
  street_type?: string | null;
  street_type_full?: string | null;
  street?: string | null;
  stead_fias_id?: string | null;
  stead_cadnum?: string | null;
  stead_type?: string | null;
  stead_type_full?: string | null;
  stead?: string | null;
  house_fias_id?: string | null;
  house_kladr_id?: string | null;
  house_cadnum?: string | null;
  house_type?: string | null;
  house_type_full?: string | null;
  house?: string | null;
  block_type?: string | null;
  block_type_full?: string | null;
  block?: string | null;
  entrance?: string | null;
  floor?: string | null;
  flat_fias_id?: string | null;
  flat_cadnum?: string | null;
  flat_type?: string | null;
  flat_type_full?: string | null;
  flat?: string | null;
  flat_area?: string | null;
  square_meter_price?: string | null;
  flat_price?: string | null;
  room_fias_id?: string | null;
  room_cadnum?: string | null;
  room_type?: string | null;
  room_type_full?: string | null;
  room?: string | null;
  postal_box?: string | null;
  fias_id: string;
  fias_code?: string | null;
  fias_level: string;
  fias_actuality_state: string;
  kladr_id: string;

  geoname_id: string;
  capital_marker: string;
  okato: string;
  oktmo: string;
  tax_office: string | null;
  tax_office_legal: string | null;
  timezone?: string | null;
  geo_lat?: string | null;
  geo_lon?: string | null;
  beltway_hit?: string | null;
  beltway_distance?: string | null;
  metro?: string | null;
  divisions?: string | null;
  qc_geo: string;
  qc_complete?: string | null;
  qc_house?: string | null;
  history_values?: string[] | null;
  unparsed_parts?: string | null;
  source?: string | null;
  qc?: string | null;
}
interface Address {
  value: string;
  unrestricted_value: string;
  data: Data;
}

interface Response {
  suggestions: Address[];
}

export type { NavItem, Address, Response };
