ObjectNode config = JsonUtil.createObject();
config.put("title", "My first repository");
config.put("country", "USA");

Repository repository = platform.createRepository(config);
System.out.println("Country: " + repository.getString("country"));
