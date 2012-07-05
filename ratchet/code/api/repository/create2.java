ObjectNode config = JsonUtil.createObject();
config.put("title", "My first repository");
config.put("description", "Oh my darling clementine");

Repository repository = platform.createRepository(config);