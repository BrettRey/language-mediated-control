QUARTO ?= quarto
STYLE_CHECK = ../../../.house-style/check-style-md.py
QMD_FILES = index.qmd $(wildcard chapters/*.qmd)

.PHONY: all preview check clean

all:
	$(QUARTO) render

preview:
	$(QUARTO) preview

check:
	python3 $(STYLE_CHECK) $(QMD_FILES)

clean:
	rm -rf _book .quarto
