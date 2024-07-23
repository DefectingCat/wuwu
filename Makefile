CARGO = cargo
RUSTC = rustc
CROSS = cross
NPM = pnpm
TAURI_SRC = src-tauri

all: build

deps:
	$(NPM) i \
		&& $(CARGO) install tauri-cli

build: clean
	$(CARGO) tauri build

dev:
	$(CARGO) tauri dev

clean:
	cd $(TAURI_SRC) \
		&& $(CARGO) clean \
		&& cd ..

clean-release:
	cd $(TAURI_SRC) \
		&& rm -rf ./target/release/ \
		&& rm -rf ./target/debug/ \
		&& cd ..

check:
	cd $(TAURI_SRC) \
		&& $(CARGO) check \
		&& cd ..

fmt:
	cd $(TAURI_SRC) \
		&& $(CARGO) fmt \
		&& cd ..

fix:
	cd $(TAURI_SRC) \
		&& $(CARGO) fix --allow-dirty --all-features \
		&& $(CARGO) fmt \
		&& cd ..

build-linux-musl: clean-release
	$(CROSS) build --release --target x86_64-unknown-linux-musl

build-linux-gnu: clean-release
	$(CROSS) build --release --target x86_64-unknown-linux-gnu

build-windows-gnu: clean-release
	$(CROSS) build --release --target x86_64-pc-windows-gnu

build-freebsd: clean-release
	$(CROSS) build --release --target x86_64-unknown-freebsd

build-loongarch: clean-release
	$(CROSS) build --release --target loongarch64-unknown-linux-gnu

.PHONY: all
