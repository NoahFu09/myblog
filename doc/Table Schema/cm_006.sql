--+------------+-------------------------------------------------------------+
--|SYSTEM CODE | CH                                          DATE:27/09/2023 |
--|SYSTEM NAME | 公用系統                                      AUTHOR:NickFu |
--+------------+-------------------------------------------------------------+
--|TABLE       | CM_006                                                      |
--|DESCRIPTION | 代碼類別檔                                                  |
--+------------+-------------------------------------------------------------+

DROP TABLE `blog`.`cm_006`;

CREATE TABLE `blog`.`cm_006` (
  `CM_006_SYS`  VARCHAR(2)      NOT NULL,
  --                                      系統別
  `CM_006_CLNO` VARCHAR(4)      NOT NULL,
  --                                      代碼類別代號
  `CM_006_CLNM` VARCHAR(40)     NOT NULL,
  --                                      代碼類別說明
  `CM_006_CDLN` DECIMAL(1,0)    NOT NULL,
  --                                      代碼代號長度 ( MAX LENGTH = 6)
  `CM_006_NMLN` DECIMAL(2,0)    NOT NULL,
  --                                      代碼說明長度 ( MAX LENGTH = 40 )
  `CM_006_CTDT` DATE            NOT NULL,
  --                                      建檔日期
  `CM_006_CTTM` TIME            NOT NULL,
  --                                      建檔時間
  `CM_006_CTUR` VARCHAR(20)     NOT NULL,
  --                                      建檔者
  `CM_006_UPDT` DATE            NOT NULL,
  --                                      異動日期
  `CM_006_UPTM` TIME            NOT NULL,
  --                                      異動時間
  `CM_006_UPUR` VARCHAR(20)     NOT NULL,
  --                                      異動者
  PRIMARY KEY (`CM_006_SYS`, `CM_006_CLNO`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci
COMMENT = '代碼類別檔';
