--+------------+-------------------------------------------------------------+
--|SYSTEM CODE | CM                                         DATE:27/09/2023  |
--|SYSTEM NAME | 公用系統                                    AUTHOR:Nick Fu  |
--+------------+-------------------------------------------------------------+
--|TABLE       | CM_007                                                      |
--|DESCRIPTION | 代碼代號檔                                                  |
--+------------+-------------------------------------------------------------+

DROP TABLE `blog`.`cm_007`;

CREATE TABLE `blog`.`cm_007` (
  `CM_007_SYS`   VARCHAR(2)      NOT NULL,
   --                                      系統別
  `CM_007_CLNO`  VARCHAR(4)      NOT NULL,
   --                                      代碼類別代號
  `CM_007_CDNO`  VARCHAR(6)      NOT NULL,
   --                                      代碼代號
  `CM_007_CDNM`  VARCHAR(40)     NOT NULL,
   --                                      代碼代號說明
  `CM_007_CDPS`  VARCHAR(40)     NOT NULL,
   --                                      備註
  `CM_007_CDP1`  VARCHAR(20)     NOT NULL,
   --                                      參數1
  `CM_007_CDP2`  DECIMAL(7,2)    NOT NULL,
   --                                      參數2
  `CM_007_CTDT`  DATE            NOT NULL,
   --                                      建檔日期
  `CM_007_CTTM`  TIME            NOT NULL,
   --                                      建檔時間
  `CM_007_CTUR`  VARCHAR(20)     NOT NULL,
   --                                      建檔者
  `CM_007_UPDT`  DATE            NOT NULL,
   --                                      異動日期
  `CM_007_UPTM`  TIME            NOT NULL,
   --                                      異動時間
  `CM_007_UPUR`  VARCHAR(20)     NOT NULL,
   --                                      異動者
  PRIMARY KEY (`CM_007_SYS`, `CM_007_CLNO`, `CM_007_CDNO`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
COMMENT = '代碼代號檔';
