--------------------------
--資料表：po_001
--------------------------
--資料表中文：文章分類主檔
--------------------------
DROP TABLE blog.po_001;

CREATE TABLE blog.po_001 (
  po_001_cat1 VARCHAR(45)  NOT NULL,
	  -- 文章分類階層一
  po_001_cnam VARCHAR(100) NOT NULL,
    -- 文章分類階層一中文
  po_001_cha1 VARCHAR(45)  NOT NULL,
    -- 文字預留一
  po_001_cha2 VARCHAR(45)  NOT NULL,
    -- 文字預留二
  po_001_cha3 VARCHAR(45)  NOT NULL,
    -- 文字預留三
  po_001_cha4 VARCHAR(45)  NOT NULL,
    -- 文字預留四
  po_001_cha5 VARCHAR(45)  NOT NULL,
    -- 文字預留五
  po_001_ctdt DATETIME     NOT NULL,
    -- 建立日期
  PO_001_updt DATETIME     NOT NULL,
    -- 更新日期
  UNIQUE INDEX po_001_cat1_UNIQUE (po_001_cat1 ASC));
