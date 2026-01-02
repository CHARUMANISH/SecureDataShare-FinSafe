from cryptography.fernet import Fernet
import hashlib

class DataTokenizer:
    def __init__(self):
        self.key = Fernet.generate_key()
        self.cipher = Fernet(self.key)

    def tokenize(self, data):
        """Create irreversible hash token from sensitive data"""
        return hashlib.sha256(data.encode()).hexdigest()

    def encrypt(self, data):
        """Encrypt data for secure storage"""
        return self.cipher.encrypt(data.encode()).decode()

    def decrypt(self, encrypted_data):
        """Decrypt data when needed"""
        return self.cipher.decrypt(encrypted_data.encode()).decode()

    def mask(self, data, visible=4):
        """Mask sensitive data (e.g., credit cards)"""
        return data[:visible] + '*' * (len(data) - visible)

# Test the tokenizer
if __name__ == "__main__":
    tokenizer = DataTokenizer()
    email = "user@example.com"
    print("Tokenized:", tokenizer.tokenize(email))
    encrypted = tokenizer.encrypt(email)
    print("Encrypted:", encrypted)
    print("Decrypted:", tokenizer.decrypt(encrypted))
    print("Masked CC:", tokenizer.mask("4111222233334444"))
    
    
    from cryptography.fernet import Fernet
import hashlib

class DataTokenizer:
    def __init__(self):
        self.key = Fernet.generate_key()
        self.cipher = Fernet(self.key)

    def tokenize(self, data):
        return hashlib.sha256(data.encode()).hexdigest()

    def encrypt(self, data):
        return self.cipher.encrypt(data.encode()).decode()

    def decrypt(self, encrypted_data):
        return self.cipher.decrypt(encrypted_data.encode()).decode()

    def mask(self, data, visible=4):
        return data[:visible] + '*' * (len(data) - visible)

if __name__ == "__main__":
    tokenizer = DataTokenizer()
    email = "user@example.com"
    print("Tokenized:", tokenizer.tokenize(email))
    encrypted = tokenizer.encrypt(email)
    print("Encrypted:", encrypted)
    print("Decrypted:", tokenizer.decrypt(encrypted))
    print("Masked CC:", tokenizer.mask("4111222233334444"))