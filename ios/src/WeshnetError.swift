
// Redefine WeshnetError with more context.
open class WeshnetError: Exception {
    public enum ErrorCase {
        case notStarted
        case coreError(NSError)
    }

    private var errorDescription: String

    public init(_ error: ErrorCase, file: String = #fileID, line: UInt = #line, function: String = #function) {
        switch error {
        case .notStarted:
            self.errorDescription = "Service hasn't started yet"
        case .coreError(let error):
            self.errorDescription = error.localizedDescription
        }
        super.init(file: file, line: line, function: function)
    }

    open override var reason: String {
        return self.errorDescription
    }
}
