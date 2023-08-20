--------------------------
--資料表：po_002
--------------------------
--資料表中文：文章分類次檔
--------------------------
DROP TABLE blog.po_002;

CREATE TABLE blog.po_002 (
  po_002_cat1 VARCHAR(45)  NOT NULL,
	-- 文章分類階層一
  po_002_cat2 VARCHAR(45)  NOT NULL,
    -- 文章分類階層二
  po_002_cnam VARCHAR(100) NOT NULL,
    -- 文章分類階層二中文
  po_002_cha1 VARCHAR(45)  NOT NULL,
    -- 文字預留一
  po_002_cha2 VARCHAR(45)  NOT NULL,
    -- 文字預留二
  po_002_cha3 VARCHAR(45)  NOT NULL,
    -- 文字預留三
  po_002_cha4 VARCHAR(45)  NOT NULL,
    -- 文字預留四
  po_002_cha5 VARCHAR(45)  NOT NULL,
    -- 文字預留五
  po_002_ctdt DATETIME     NOT NULL,
    -- 建立日期
  po_002_updt DATETIME     NOT NULL,
    -- 更新日期
  UNIQUE INDEX po_002_cat1_UNIQUE (po_002_cat1 ASC));
  CREATE INDEX po_002_cat2_UNIQUE ON po_002(po_002_cat2);