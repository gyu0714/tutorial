export interface ICubeResult {
  count: number;
  cube_histories: CubeHistoryDTO[];
  next_cursor: string;
}

export interface CubeHistoryDTO {
  id: string;
  character_name: string;
  create_date: string;
  cube_type: string;
  item_upgrade_result: string;
  miracle_time_flag: string;
  item_equip_part: string;
  item_level: number;
  target_item: string;
  potential_option_grade: string;
  additional_potential_option_grade: string;
  before_potential_options?:
    | BeforePotentialOptionsEntityOrAfterPotentialOptionsEntity[]
    | null;
  before_additional_potential_options?: null[] | null;
  after_potential_options?:
    | BeforePotentialOptionsEntityOrAfterPotentialOptionsEntity[]
    | null;
  after_additional_potential_options?: null[] | null;
}
export interface BeforePotentialOptionsEntityOrAfterPotentialOptionsEntity {
  value: string;
  grade: string;
}
