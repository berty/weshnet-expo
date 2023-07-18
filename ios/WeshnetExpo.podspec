require 'json'

package = JSON.parse(File.read(File.join(__dir__, '..', 'package.json')))

Pod::Spec.new do |s|
  s.name           = 'WeshnetExpo'
  s.version        = package['version']
  s.summary        = package['description']
  s.description    = package['description']
  s.license        = package['license']
  s.author         = package['author']
  s.homepage       = package['homepage']
  s.platform       = :ios, '13.0'
  s.swift_version  = '5.4'
  s.source         = { git: 'https://github.com/berty/weshnet-expo' }
  s.static_framework = true

  s.dependency 'ExpoModulesCore'

  # Swift/Objective-C compatibility
  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES',
    'SWIFT_COMPILATION_MODE' => 'wholemodule',
  }

  s.libraries = 'resolv'
  s.frameworks = 'CoreBluetooth', 'MultipeerConnectivity'
  s.source_files = 'src/**/*.{h,m,mm,swift}'
  s.prepare_command = 'make -C .. build.ios'
  s.vendored_frameworks = "Frameworks/WeshnetCore.xcframework"
  s.preserve_paths = 'Frameworks/WeshnetCore.xcframework'

end
