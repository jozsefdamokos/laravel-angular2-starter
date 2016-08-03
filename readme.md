# Laravel + Angular2 starter

Starter template for Angular2 apps with a Laravel backend. Uses compass for compiling a base SCSS stylesheet, but can be removed easily.

## System requirements

- virtualbox    https://www.virtualbox.org/wiki/Downloads
- vagrant       https://www.vagrantup.com/docs/installation/
- compass       http://compass-style.org/install/

## Installation instructions:

Clone the repo:

	git clone https://github.com/jozsefdamokos/laravel-angular2-starter.git

Install composer

	composer install

Install npm packages

	npm i

Set up homestead and edit your configuration

	php vendor/bin/homestead make

Get the virtual machine running

	vagrant up --provision

## Development

To compile all your assets and bundle the app

	gulp

For minified assets

	gulp --production

To watch for changes

	gulp watch
