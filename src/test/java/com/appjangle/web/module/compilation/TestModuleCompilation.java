package com.appjangle.web.module.compilation;

import org.junit.Test;

import com.appjangle.qunit.QUnit;

public class TestModuleCompilation {

	@Test
	public void test() {
		QUnit.run(this, "qunit_module_compile.html");
	}
	
}
